import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MakerMedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MakerMedicineCreateArgs) {
    try {
      const response: any = await this.prisma.makerMedicine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MakerMedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.makerMedicine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MakerMedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.makerMedicine.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MakerMedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.makerMedicine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MakerMedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.makerMedicine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

