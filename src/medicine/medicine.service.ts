import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicineCreateArgs) {
    try {
      const response: any = await this.prisma.medicine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.medicine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medicine.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.medicine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.medicine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

