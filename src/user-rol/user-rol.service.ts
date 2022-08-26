import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRolService {
  constructor(private prisma: PrismaService) { }
  async create(params: Prisma.UserRolCreateArgs) {
    try {
      const data = await this.prisma.userRol.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.UserRolFindManyArgs) {
    try {
      const data = await this.prisma.userRol.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.UserRolFindUniqueArgs) {
    try {
      const data = await this.prisma.userRol.findUnique(params);

      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.UserRolFindFirstArgs) {
    try {
      const data = await this.prisma.userRol.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.UserRolUpdateArgs) {
    try {
      const data = await this.prisma.userRol.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.UserRolDeleteArgs) {
    try {
      const data = await this.prisma.userRol.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
