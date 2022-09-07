import { Injectable, NotFoundException } from '@nestjs/common';
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
      const response = await this.prisma.product.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.ProductFindManyArgs) {
    try {
      const response = await this.prisma.product.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.ProductFindUniqueArgs) {
    try {
      const response = await this.prisma.product.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.ProductFindFirstArgs) {
    try {
      const response = await this.prisma.product.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.ProductUpdateArgs) {
    try {
      const response = await this.prisma.product.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.ProductUpdateManyArgs) {
    try {
      const response = await this.prisma.product.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.ProductDeleteArgs) {
    try {
      const response = await this.prisma.product.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
