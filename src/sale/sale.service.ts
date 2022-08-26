import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.SaleCreateArgs) {
    try {
      const data = await this.prisma.sale.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SaleFindManyArgs) {
    try {
      const data = await this.prisma.sale.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SaleFindUniqueArgs) {
    try {
      const data = await this.prisma.sale.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SaleFindFirstArgs) {
    try {
      const data = await this.prisma.sale.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SaleUpdateArgs) {
    try {
      const data = await this.prisma.sale.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SaleUpdateManyArgs) {
    try {
      const data = await this.prisma.sale.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SaleDeleteArgs) {
    try {
      const data = await this.prisma.sale.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
