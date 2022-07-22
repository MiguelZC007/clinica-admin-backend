import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryAnalysisService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.CategoryAnalysisCreateArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.CategoryAnalysisFindManyArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.CategoryAnalysisFindUniqueArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.CategoryAnalysisFindFirstArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.CategoryAnalysisUpdateArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.CategoryAnalysisUpdateManyArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.CategoryAnalysisDeleteArgs) {
    try {
      let data = await this.prisma.categoryAnalysis.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
