import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleDetailDto } from './dto/create-sale-detail.dto';
import { UpdateSaleDetailDto } from './dto/update-sale-detail.dto';

@Injectable()
export class SaleDetailService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.SaleDetailCreateArgs) {
    try {
      let data = await this.prisma.saleDetail.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SaleDetailFindManyArgs) {
    try {
      let data = await this.prisma.saleDetail.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SaleDetailFindUniqueArgs) {
    try {
      let data = await this.prisma.saleDetail.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SaleDetailFindFirstArgs) {
    try {
      let data = await this.prisma.saleDetail.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SaleDetailUpdateArgs) {
    try {
      let data = await this.prisma.saleDetail.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SaleDetailUpdateManyArgs) {
    try {
      let data = await this.prisma.saleDetail.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SaleDetailDeleteArgs) {
    try {
      let data = await this.prisma.saleDetail.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
