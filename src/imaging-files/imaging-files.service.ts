import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ImagingFilesService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.ImagingFilesCreateArgs) {
    try {
      const response: any = await this.prisma.imagingFiles.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.ImagingFilesFindManyArgs) {
    try {
      const response: any = await this.prisma.imagingFiles.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.ImagingFilesFindUniqueArgs) {
    try {
      const response: any = await this.prisma.imagingFiles.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.ImagingFilesUpdateArgs) {
    try {
      const response: any = await this.prisma.imagingFiles.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.ImagingFilesDeleteArgs) {
    try {
      const response: any = await this.prisma.imagingFiles.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

