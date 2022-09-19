import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeReceiptService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.RecipeReceiptCreateArgs) {
    try {
      const response: any = await this.prisma.recipeReceipt.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.RecipeReceiptFindManyArgs) {
    try {
      const response: any = await this.prisma.recipeReceipt.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.RecipeReceiptFindUniqueArgs) {
    try {
      const response: any = await this.prisma.recipeReceipt.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.RecipeReceiptUpdateArgs) {
    try {
      const response: any = await this.prisma.recipeReceipt.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.RecipeReceiptDeleteArgs) {
    try {
      const response: any = await this.prisma.recipeReceipt.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

