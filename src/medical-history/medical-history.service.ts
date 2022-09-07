import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicalHistoryService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicalHistoryCreateArgs) {
    try {
      const response: any = await this.prisma.medicalHistory.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicalHistoryFindManyArgs) {
    try {
      const response: any = await this.prisma.medicalHistory.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicalHistoryFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medicalHistory.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicalHistoryUpdateArgs) {
    try {
      const response: any = await this.prisma.medicalHistory.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicalHistoryDeleteArgs) {
    try {
      const response: any = await this.prisma.medicalHistory.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

