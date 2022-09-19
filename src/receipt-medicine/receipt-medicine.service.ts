import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceiptMedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.ReceiptMedicineCreateArgs) {
    try {
      const response: any = await this.prisma.receiptMedicine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.ReceiptMedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.receiptMedicine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.ReceiptMedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.receiptMedicine.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.ReceiptMedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.receiptMedicine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.ReceiptMedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.receiptMedicine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

