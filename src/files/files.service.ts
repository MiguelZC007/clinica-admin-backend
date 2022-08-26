import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { ArchiveService } from 'src/archive/archive.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(
    private prisma: PrismaService,
    private archiveService: ArchiveService,
  ) { }

  public files_include: Prisma.FilesInclude = {
    hemodialysis: {
      include: {
        patient: true,
      },
    },
  };

  async create(params: Prisma.FilesCreateArgs, file: string = null) {
    try {
      if (file != null) {
        const hemodialysis = await this.prisma.hemodialysis.findUnique({
          where: { id: params.data.hemodialysis_id },
          include: {
            patient: true,
          },
        });
        if (hemodialysis != null) {
          const at = await this.archiveService.fileUpload(
            params.data.ext + file,
            hemodialysis.patient_id,
            hemodialysis.patient,
          );
          if (at != null) {
            params.data.url = at.filename;
            const response: any = await this.prisma.files.create(params);
            return response;
          } else {
            throw new BadRequestException({
              message: 'Error al subir el archivo',
            });
          }
        } else {
          throw new BadRequestException({
            message: 'El paciente no existe',
          });
        }
      } else {
        throw new BadRequestException({ message: 'No subio ningun archivo' });
      }
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async upsert(params: Prisma.FilesUpsertArgs, file: string = null) {
    try {
      if (file != null) {
        const hemodialysis = await this.prisma.hemodialysis.findUnique({
          where: { id: params.create.hemodialysis_id },
          include: {
            patient: true,
          },
        });
        if (hemodialysis != null) {
          const at = await this.archiveService.fileUpload(
            file,
            hemodialysis.patient_id,
            hemodialysis.patient,
          );
          if (at != null) {
            params.create.ext = at.type;
            params.create.url = at.filename;
            params.update.ext = at.type;
            params.update.url = at.filename;
            const response: any = await this.prisma.files.upsert(params);
            return response;
          } else {
            throw new BadRequestException({
              message: 'Error al subir el archivo',
            });
          }
        } else {
          throw new BadRequestException({
            message: 'El paciente no existe',
          });
        }
      } else {
        throw new BadRequestException({ message: 'No subio ningun archivo' });
      }
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.FilesFindManyArgs) {
    try {
      const response: any = await this.prisma.files.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.FilesFindUniqueArgs) {
    try {
      const response: any = await this.prisma.files.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.FilesUpdateArgs, file: string = null) {
    try {
      if (file != null) {
        const dt = await this.findUnique({
          where: params.where,
          include: {
            hemodialysis: {
              include: {
                patient: true,
              },
            },
          },
        });
        if (dt != null) {
          const at = await this.archiveService.fileUpload(
            file,
            dt.hemodialysis.patient_id,
            dt.hemodialysis.patient,
          );
          if (at != null) {
            params.data.ext = at.type;
            params.data.url = at.filename;
          } else {
            throw new BadRequestException({
              message: 'Error al subir el archivo',
            });
          }
        } else {
          throw new BadRequestException({
            message: 'El paciente no existe',
          });
        }
      } else {
        throw new BadRequestException({ message: 'No subio ningun archivo' });
      }
      const response: any = await this.prisma.files.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.FilesDeleteArgs) {
    try {
      const response: any = await this.prisma.files.delete(params);
      await this.archiveService.fileDelete(response.url);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
