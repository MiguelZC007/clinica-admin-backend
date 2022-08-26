import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HemodialysisMachineService {
  constructor(private prisma: PrismaService) {}

  public hemodialysis_machine_include: Prisma.HemodialysisMachineInclude = {
    hemodialysis: {
      include: {
        patient: true,
      },
    },
    turn_machine: {
      include: {
        turn: true,
        machine: true,
      },
    },
  };
  async create(params: Prisma.HemodialysisMachineCreateArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.HemodialysisMachineFindManyArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.HemodialysisMachineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.HemodialysisMachineUpdateArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.HemodialysisMachineDeleteArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
