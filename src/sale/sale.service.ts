import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.SaleCreateArgs) {
    try {
      const response = await this.prisma.sale.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SaleFindManyArgs) {
    try {
      const response = await this.prisma.sale.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SaleFindUniqueArgs) {
    try {
      const response = await this.prisma.sale.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SaleFindFirstArgs) {
    try {
      const response = await this.prisma.sale.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SaleUpdateArgs) {
    try {
      const response = await this.prisma.sale.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SaleUpdateManyArgs) {
    try {
      const response = await this.prisma.sale.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SaleDeleteArgs) {
    try {
      const response = await this.prisma.sale.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
