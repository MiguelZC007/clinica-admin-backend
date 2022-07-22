import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  public product_select: Prisma.ProductSelect = {
    id: true,
    name: true,
    price: true,
    state: true,
    description: true,
    programmable: true,
    sub_category: true,
    odoo_product_id: true,
    category_id: true,
    category: true,
    createdAt: true,
    updatedAt: true,
  };

  public product_public_select: Prisma.ProductSelect = {
    id: true,
    name: true,
    price: true,
    state: true,
    description: true,
    programmable: true,
    sub_category: true,
    odoo_product_id: false,
    category_id: true,
    category: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(params: Prisma.ProductCreateArgs) {
    try {
      let data = await this.prisma.product.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.ProductFindManyArgs) {
    try {
      let data = await this.prisma.product.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.ProductFindUniqueArgs) {
    try {
      let data = await this.prisma.product.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.ProductFindFirstArgs) {
    try {
      let data = await this.prisma.product.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.ProductUpdateArgs) {
    try {
      let data = await this.prisma.product.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.ProductUpdateManyArgs) {
    try {
      let data = await this.prisma.product.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.ProductDeleteArgs) {
    try {
      let data = await this.prisma.product.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
