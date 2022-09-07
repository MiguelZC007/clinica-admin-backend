import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkingHourService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.WorkingHourCreateArgs) {
    try {
      const response: any = await this.prisma.workingHour.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.WorkingHourFindManyArgs) {
    try {
      const response: any = await this.prisma.workingHour.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.WorkingHourFindUniqueArgs) {
    try {
      const response: any = await this.prisma.workingHour.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.WorkingHourUpdateArgs) {
    try {
      const response: any = await this.prisma.workingHour.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.WorkingHourDeleteArgs) {
    try {
      const response: any = await this.prisma.workingHour.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

