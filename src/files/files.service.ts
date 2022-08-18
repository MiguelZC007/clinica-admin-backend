import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  public files_include: Prisma.FilesInclude = {
    hemodialysis: {
      include: {
        patient: true,
      },
    },
  };

  async create(params: Prisma.FilesCreateArgs) {
    try {
      let response: any = await this.prisma.files.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.FilesFindManyArgs) {
    try {
      let response: any = await this.prisma.files.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.FilesFindUniqueArgs) {
    try {
      let response: any = await this.prisma.files.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.FilesUpdateArgs) {
    try {
      let response: any = await this.prisma.files.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.FilesDeleteArgs) {
    try {
      let response: any = await this.prisma.files.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
