import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) { }
  async create(params: Prisma.RolCreateArgs) {
    try {
      const data = await this.prisma.rol.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.RolFindManyArgs) {
    try {
      const data = await this.prisma.rol.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.RolFindUniqueArgs) {
    try {
      const data = await this.prisma.rol.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.RolFindFirstArgs) {
    try {
      const data = await this.prisma.rol.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.RolUpdateArgs) {
    try {
      const data = await this.prisma.rol.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.RolUpdateManyArgs) {
    try {
      const data = await this.prisma.rol.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.RolDeleteArgs) {
    try {
      const data = await this.prisma.rol.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
