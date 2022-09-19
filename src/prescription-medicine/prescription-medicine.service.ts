import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrescriptionMedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PrescriptionMedicineCreateArgs) {
    try {
      const response: any = await this.prisma.prescriptionMedicine.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.PrescriptionMedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.prescriptionMedicine.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.PrescriptionMedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.prescriptionMedicine.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.PrescriptionMedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.prescriptionMedicine.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.PrescriptionMedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.prescriptionMedicine.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

