import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrescriptionHemodialysisService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PrescriptionHemodialysisCreateArgs) {
    try {
      const response: any = await this.prisma.prescriptionHemodialysis.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.PrescriptionHemodialysisFindManyArgs) {
    try {
      const response: any = await this.prisma.prescriptionHemodialysis.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.PrescriptionHemodialysisFindUniqueArgs) {
    try {
      const response: any =
        await this.prisma.prescriptionHemodialysis.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.PrescriptionHemodialysisUpdateArgs) {
    try {
      const response: any = await this.prisma.prescriptionHemodialysis.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.PrescriptionHemodialysisDeleteArgs) {
    try {
      const response: any = await this.prisma.prescriptionHemodialysis.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

