import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IcdService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.IcdCreateArgs) {
    try {
      const response: any = await this.prisma.icd.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.IcdFindManyArgs) {
    try {
      const response: any = await this.prisma.icd.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.IcdFindUniqueArgs) {
    try {
      const response: any = await this.prisma.icd.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.IcdUpdateArgs) {
    try {
      const response: any = await this.prisma.icd.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.IcdDeleteArgs) {
    try {
      const response: any = await this.prisma.icd.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
