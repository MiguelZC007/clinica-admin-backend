import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReferenceValueService {
  constructor(private prisma: PrismaService) {}

  public reference_value_select: Prisma.ReferenceValueSelect = {
    id: true,
    name: true,
    description: true,
    value_reference: true,
    unit_measurement: true,
    maker: true,
    type: true,
    state: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(params: Prisma.ReferenceValueCreateArgs) {
    try {
      const response = await this.prisma.referenceValue.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.ReferenceValueFindManyArgs) {
    try {
      const response = await this.prisma.referenceValue.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.ReferenceValueFindUniqueArgs) {
    try {
      const response = await this.prisma.referenceValue.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.ReferenceValueFindFirstArgs) {
    try {
      const response = await this.prisma.referenceValue.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.ReferenceValueUpdateArgs) {
    try {
      const response = await this.prisma.referenceValue.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.ReferenceValueUpdateManyArgs) {
    try {
      const response = await this.prisma.referenceValue.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.ReferenceValueDeleteArgs) {
    try {
      const response = await this.prisma.referenceValue.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
