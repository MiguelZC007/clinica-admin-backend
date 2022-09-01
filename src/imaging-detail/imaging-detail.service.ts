import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagingDetailService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.ImagingDetailCreateArgs) {
    try {
      const response: any = await this.prisma.imagingDetail.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.ImagingDetailFindManyArgs) {
    try {
      const response: any = await this.prisma.imagingDetail.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.ImagingDetailFindUniqueArgs) {
    try {
      const response: any = await this.prisma.imagingDetail.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.ImagingDetailUpdateArgs) {
    try {
      const response: any = await this.prisma.imagingDetail.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.ImagingDetailDeleteArgs) {
    try {
      const response: any = await this.prisma.imagingDetail.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
