import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SampleService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.SampleCreateArgs) {
    try {
      const response: any = await this.prisma.sample.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.SampleFindManyArgs) {
    try {
      const response: any = await this.prisma.sample.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.SampleFindUniqueArgs) {
    try {
      const response: any = await this.prisma.sample.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.SampleUpdateArgs) {
    try {
      const response: any = await this.prisma.sample.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.SampleDeleteArgs) {
    try {
      const response: any = await this.prisma.sample.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
