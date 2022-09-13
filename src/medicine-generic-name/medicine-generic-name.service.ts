import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicineGenericNameService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.MedicineGenericNameCreateArgs) {
    try {
      const response: any = await this.prisma.medicineGenericName.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MedicineGenericNameFindManyArgs) {
    try {
      const response: any = await this.prisma.medicineGenericName.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MedicineGenericNameFindUniqueArgs) {
    try {
      const response: any = await this.prisma.medicineGenericName.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MedicineGenericNameUpdateArgs) {
    try {
      const response: any = await this.prisma.medicineGenericName.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MedicineGenericNameDeleteArgs) {
    try {
      const response: any = await this.prisma.medicineGenericName.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

