import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}
  async create(params: Prisma.RolCreateArgs) {
    try {
      const response = await this.prisma.rol.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.RolFindManyArgs) {
    try {
      const response = await this.prisma.rol.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.RolFindUniqueArgs) {
    try {
      const response = await this.prisma.rol.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.RolFindFirstArgs) {
    try {
      const response = await this.prisma.rol.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.RolUpdateArgs) {
    try {
      const response = await this.prisma.rol.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.RolUpdateManyArgs) {
    try {
      const response = await this.prisma.rol.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.RolDeleteArgs) {
    try {
      const response = await this.prisma.rol.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
