import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceiptService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.ReceiptCreateArgs) {
    try {
      const response: any = await this.prisma.receipt.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.ReceiptFindManyArgs) {
    try {
      const response: any = await this.prisma.receipt.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.ReceiptFindUniqueArgs) {
    try {
      const response: any = await this.prisma.receipt.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.ReceiptUpdateArgs) {
    try {
      const response: any = await this.prisma.receipt.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.ReceiptDeleteArgs) {
    try {
      const response: any = await this.prisma.receipt.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

