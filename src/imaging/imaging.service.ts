import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagingService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.ImagingCreateArgs) {
    try {
      const response: any = await this.prisma.imaging.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.ImagingFindManyArgs) {
    try {
      const response: any = await this.prisma.imaging.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.ImagingFindUniqueArgs) {
    try {
      const response: any = await this.prisma.imaging.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.ImagingUpdateArgs) {
    try {
      const response: any = await this.prisma.imaging.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.ImagingDeleteArgs) {
    try {
      const response: any = await this.prisma.imaging.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
