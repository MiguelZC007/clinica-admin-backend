import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) { }

  public specialty_select: Prisma.SpecialtySelect = {
    id: true,
    name: true,
    description: true,
    state: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(params: Prisma.SpecialtyCreateArgs) {
    try {
      const data = await this.prisma.specialty.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SpecialtyFindManyArgs) {
    try {
      const data = await this.prisma.specialty.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SpecialtyFindUniqueArgs) {
    try {
      const data = await this.prisma.specialty.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SpecialtyFindFirstArgs) {
    try {
      const data = await this.prisma.specialty.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SpecialtyUpdateArgs) {
    try {
      const data = await this.prisma.specialty.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SpecialtyUpdateManyArgs) {
    try {
      const data = await this.prisma.specialty.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SpecialtyDeleteArgs) {
    try {
      const data = await this.prisma.specialty.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
