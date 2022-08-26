import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.CategoryCreateArgs) {
    try {
      const data = await this.prisma.category.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.CategoryFindManyArgs) {
    try {
      const data = await this.prisma.category.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.CategoryFindUniqueArgs) {
    try {
      const data = await this.prisma.category.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.CategoryFindFirstArgs) {
    try {
      const data = await this.prisma.category.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.CategoryUpdateArgs) {
    try {
      const data = await this.prisma.category.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.CategoryUpdateManyArgs) {
    try {
      const data = await this.prisma.category.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.CategoryDeleteArgs) {
    try {
      const data = await this.prisma.category.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
