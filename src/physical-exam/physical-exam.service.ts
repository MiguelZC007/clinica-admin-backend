import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhysicalExamService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PhysicalExamCreateArgs) {
    try {
      const response: any = await this.prisma.physicalExam.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.PhysicalExamFindManyArgs) {
    try {
      const response: any = await this.prisma.physicalExam.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.PhysicalExamFindUniqueArgs) {
    try {
      const response: any = await this.prisma.physicalExam.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.PhysicalExamUpdateArgs) {
    try {
      const response: any = await this.prisma.physicalExam.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.PhysicalExamDeleteArgs) {
    try {
      const response: any = await this.prisma.physicalExam.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

