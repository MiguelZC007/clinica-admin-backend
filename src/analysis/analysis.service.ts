import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalysisService {
  constructor(private prisma: PrismaService) {}

  public analysis_select: Prisma.AnalysisSelect = {
    id: true,
    product: true,
    product_id: true,
    name: true,
    order: true,
    state: true,
    createdAt: true,
    updatedAt: true,
    parent_analysis: true,
    category: true,
    category_id: true,
    reference_value_id: true,
    parent: true,
    parent_id: true,
  };

  async create(params: Prisma.AnalysisCreateArgs) {
    try {
      const data = await this.prisma.analysis.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.AnalysisFindManyArgs) {
    try {
      const data = await this.prisma.analysis.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.AnalysisFindUniqueArgs) {
    try {
      const data = await this.prisma.analysis.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.AnalysisFindFirstArgs) {
    try {
      const data = await this.prisma.analysis.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.AnalysisUpdateArgs) {
    try {
      const data = await this.prisma.analysis.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.AnalysisUpdateManyArgs) {
    try {
      const data = await this.prisma.analysis.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.AnalysisDeleteArgs) {
    try {
      const data = await this.prisma.analysis.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
