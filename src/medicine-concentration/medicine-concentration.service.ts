import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicineConcentrationService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicineConcentrationCreateArgs) {
    try {
      const response: any = await this.prisma.medicineConcentration.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicineConcentrationFindManyArgs) {
    try {
      const response: any = await this.prisma.medicineConcentration.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicineConcentrationFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medicineConcentration.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicineConcentrationUpdateArgs) {
    try {
      const response: any = await this.prisma.medicineConcentration.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicineConcentrationDeleteArgs) {
    try {
      const response: any = await this.prisma.medicineConcentration.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

