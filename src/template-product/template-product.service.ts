import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplateProductService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.TemplateProductCreateArgs) {
    try {
      const response: any = await this.prisma.templateProduct.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.TemplateProductFindManyArgs) {
    try {
      const response: any = await this.prisma.templateProduct.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.TemplateProductFindUniqueArgs) {
    try {
      const response: any = await this.prisma.templateProduct.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.TemplateProductUpdateArgs) {
    try {
      const response: any = await this.prisma.templateProduct.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.TemplateProductDeleteArgs) {
    try {
      const response: any = await this.prisma.templateProduct.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
