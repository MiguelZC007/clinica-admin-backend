import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplateMedicineService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.TemplateMedicineCreateArgs) {
    try {
      const response: any = await this.prisma.templateMedicine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.TemplateMedicineFindManyArgs) {
    try {
      const response: any = await this.prisma.templateMedicine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.TemplateMedicineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.templateMedicine.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.TemplateMedicineUpdateArgs) {
    try {
      const response: any = await this.prisma.templateMedicine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.TemplateMedicineDeleteArgs) {
    try {
      const response: any = await this.prisma.templateMedicine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

