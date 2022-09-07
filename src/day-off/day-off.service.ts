import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DayOffService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.DayOffCreateArgs) {
    try {
      const response: any = await this.prisma.dayOff.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.DayOffFindManyArgs) {
    try {
      const response: any = await this.prisma.dayOff.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.DayOffFindUniqueArgs) {
    try {
      const response: any = await this.prisma.dayOff.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.DayOffUpdateArgs) {
    try {
      const response: any = await this.prisma.dayOff.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.DayOffDeleteArgs) {
    try {
      const response: any = await this.prisma.dayOff.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

