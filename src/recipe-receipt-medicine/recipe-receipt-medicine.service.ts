import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeReceiptMedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.RecipeReceiptMedicineCreateArgs) {
    try {
      const response: any = await this.prisma.recipeReceiptMedicine.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.RecipeReceiptMedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.recipeReceiptMedicine.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.RecipeReceiptMedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.recipeReceiptMedicine.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.RecipeReceiptMedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.recipeReceiptMedicine.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.RecipeReceiptMedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.recipeReceiptMedicine.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

