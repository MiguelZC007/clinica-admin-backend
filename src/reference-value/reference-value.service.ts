import { Injectable } from '@nestjs/common';
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
      let data = await this.prisma.referenceValue.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.ReferenceValueFindManyArgs) {
    try {
      let data = await this.prisma.referenceValue.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.ReferenceValueFindUniqueArgs) {
    try {
      let data = await this.prisma.referenceValue.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.ReferenceValueFindFirstArgs) {
    try {
      let data = await this.prisma.referenceValue.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.ReferenceValueUpdateArgs) {
    try {
      let data = await this.prisma.referenceValue.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.ReferenceValueUpdateManyArgs) {
    try {
      let data = await this.prisma.referenceValue.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.ReferenceValueDeleteArgs) {
    try {
      let data = await this.prisma.referenceValue.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
