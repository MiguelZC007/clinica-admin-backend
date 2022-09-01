import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddendumService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.AddendumCreateArgs) {
    try {
      const response: any = await this.prisma.addendum.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.AddendumFindManyArgs) {
    try {
      const response: any = await this.prisma.addendum.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.AddendumFindUniqueArgs) {
    try {
      const response: any = await this.prisma.addendum.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.AddendumUpdateArgs) {
    try {
      const response: any = await this.prisma.addendum.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.AddendumDeleteArgs) {
    try {
      const response: any = await this.prisma.addendum.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
