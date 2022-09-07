import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicalHistoryDetailService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicalHistoryDetailCreateArgs) {
    try {
      const response: any = await this.prisma.medicalHistoryDetail.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicalHistoryDetailFindManyArgs) {
    try {
      const response: any = await this.prisma.medicalHistoryDetail.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicalHistoryDetailFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medicalHistoryDetail.findUnique(
        params,
      );
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicalHistoryDetailUpdateArgs) {
    try {
      const response: any = await this.prisma.medicalHistoryDetail.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicalHistoryDetailDeleteArgs) {
    try {
      const response: any = await this.prisma.medicalHistoryDetail.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

