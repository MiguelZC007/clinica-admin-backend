import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecordUnderlyingDiseaseService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.RecordUnderlyingDiseaseCreateArgs) {
    try {
      const response: any = await this.prisma.recordUnderlyingDisease.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.RecordUnderlyingDiseaseFindManyArgs) {
    try {
      const response: any = await this.prisma.recordUnderlyingDisease.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.RecordUnderlyingDiseaseFindUniqueArgs) {
    try {
      const response: any =
        await this.prisma.recordUnderlyingDisease.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.RecordUnderlyingDiseaseUpdateArgs) {
    try {
      const response: any = await this.prisma.recordUnderlyingDisease.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.RecordUnderlyingDiseaseDeleteArgs) {
    try {
      const response: any = await this.prisma.recordUnderlyingDisease.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

