import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleDetailService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.SaleDetailCreateArgs) {
    try {
      const response = await this.prisma.saleDetail.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SaleDetailFindManyArgs) {
    try {
      const response = await this.prisma.saleDetail.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SaleDetailFindUniqueArgs) {
    try {
      const response = await this.prisma.saleDetail.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SaleDetailFindFirstArgs) {
    try {
      const response = await this.prisma.saleDetail.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SaleDetailUpdateArgs) {
    try {
      const response = await this.prisma.saleDetail.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SaleDetailUpdateManyArgs) {
    try {
      const response = await this.prisma.saleDetail.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SaleDetailDeleteArgs) {
    try {
      const response = await this.prisma.saleDetail.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
