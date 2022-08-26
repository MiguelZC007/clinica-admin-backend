import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MachineService {
  constructor(private prisma: PrismaService) {}

  public machine_include: Prisma.MachineInclude = {};

  async create(params: Prisma.MachineCreateArgs) {
    try {
      const response: any = await this.prisma.machine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.MachineFindManyArgs) {
    try {
      const response: any = await this.prisma.machine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.MachineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.machine.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.MachineUpdateArgs) {
    try {
      const response: any = await this.prisma.machine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.MachineDeleteArgs) {
    try {
      const response: any = await this.prisma.machine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
