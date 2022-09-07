import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) {}

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
      const response = await this.prisma.specialty.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SpecialtyFindManyArgs) {
    try {
      const response = await this.prisma.specialty.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SpecialtyFindUniqueArgs) {
    try {
      const response = await this.prisma.specialty.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SpecialtyFindFirstArgs) {
    try {
      const response = await this.prisma.specialty.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SpecialtyUpdateArgs) {
    try {
      const response = await this.prisma.specialty.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SpecialtyUpdateManyArgs) {
    try {
      const response = await this.prisma.specialty.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SpecialtyDeleteArgs) {
    try {
      const response = await this.prisma.specialty.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
