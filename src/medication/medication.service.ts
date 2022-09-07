import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicationService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicationCreateArgs) {
    try {
      const response: any = await this.prisma.medication.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicationFindManyArgs) {
    try {
      const response: any = await this.prisma.medication.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicationFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medication.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicationUpdateArgs) {
    try {
      const response: any = await this.prisma.medication.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicationDeleteArgs) {
    try {
      const response: any = await this.prisma.medication.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

