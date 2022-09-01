import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class LaboratoryService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.LaboratoryCreateArgs) {
    try {
      const response: any = await this.prisma.laboratory.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.LaboratoryFindManyArgs) {
    try {
      const response: any = await this.prisma.laboratory.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.LaboratoryFindUniqueArgs) {
    try {
      const response: any = await this.prisma.laboratory.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.LaboratoryUpdateArgs) {
    try {
      const response: any = await this.prisma.laboratory.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.LaboratoryDeleteArgs) {
    try {
      const response: any = await this.prisma.laboratory.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
