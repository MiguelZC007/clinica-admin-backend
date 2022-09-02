import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VitalSignsHemodialysisService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.VitalSignsHemodialysisCreateArgs) {
    try {
      const response: any = await this.prisma.vitalSignsHemodialysis.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.VitalSignsHemodialysisFindManyArgs) {
    try {
      const response: any = await this.prisma.vitalSignsHemodialysis.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.VitalSignsHemodialysisFindUniqueArgs) {
    try {
      const response: any = await this.prisma.vitalSignsHemodialysis.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.VitalSignsHemodialysisUpdateArgs) {
    try {
      const response: any = await this.prisma.vitalSignsHemodialysis.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.VitalSignsHemodialysisDeleteArgs) {
    try {
      const response: any = await this.prisma.vitalSignsHemodialysis.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
