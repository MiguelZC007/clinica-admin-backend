import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrescriptionService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PrescriptionCreateArgs) {
    try {
      const response: any = await this.prisma.prescription.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.PrescriptionFindManyArgs) {
    try {
      const response: any = await this.prisma.prescription.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.PrescriptionFindUniqueArgs) {
    try {
      const response: any = await this.prisma.prescription.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.PrescriptionUpdateArgs) {
    try {
      const response: any = await this.prisma.prescription.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.PrescriptionDeleteArgs) {
    try {
      const response: any = await this.prisma.prescription.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

