import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryAnalysisService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.CategoryAnalysisCreateArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.CategoryAnalysisFindManyArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.CategoryAnalysisFindUniqueArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.CategoryAnalysisFindFirstArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.CategoryAnalysisUpdateArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.CategoryAnalysisUpdateManyArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.CategoryAnalysisDeleteArgs) {
    try {
      const response = await this.prisma.categoryAnalysis.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
