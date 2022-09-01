import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiagnosticService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.DiagnosticCreateArgs) {
    try {
      const response: any = await this.prisma.diagnostic.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.DiagnosticFindManyArgs) {
    try {
      const response: any = await this.prisma.diagnostic.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.DiagnosticFindUniqueArgs) {
    try {
      const response: any = await this.prisma.diagnostic.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.DiagnosticUpdateArgs) {
    try {
      const response: any = await this.prisma.diagnostic.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.DiagnosticDeleteArgs) {
    try {
      const response: any = await this.prisma.diagnostic.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
