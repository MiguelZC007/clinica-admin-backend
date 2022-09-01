import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SampleResultService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.SampleResultCreateArgs) {
    try {
      const response: any = await this.prisma.sampleResult.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.SampleResultFindManyArgs) {
    try {
      const response: any = await this.prisma.sampleResult.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.SampleResultFindUniqueArgs) {
    try {
      const response: any = await this.prisma.sampleResult.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.SampleResultUpdateArgs) {
    try {
      const response: any = await this.prisma.sampleResult.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.SampleResultDeleteArgs) {
    try {
      const response: any = await this.prisma.sampleResult.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
