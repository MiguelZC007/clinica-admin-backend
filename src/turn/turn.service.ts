import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { TurnMachineService } from 'src/turn-machine/turn-machine.service';

@Injectable()
export class TurnService {
  constructor(
    private prisma: PrismaService,
    private turnMachineService: TurnMachineService,
  ) {}

  public turn_include: Prisma.TurnInclude = {
    turn_machine: {
      include: {
        machine: true,
      },
    },
  };

  async create(params: Prisma.TurnCreateArgs) {
    try {
      const response = await this.prisma.turn.create(params);
      const machines = await this.prisma.machine.findMany({
        where: {
          active: true,
        },
      });
      if (machines.length > 0) {
        for (const item of machines) {
          await this.turnMachineService.create({
            data: {
              machine: {
                connect: {
                  id: item.id,
                },
              },
              turn: {
                connect: {
                  id: response.id,
                },
              },
            },
          });
        }
      }
      return this.findUnique({
        where: { id: response.id },
        include: params.include,
      });
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.TurnFindManyArgs) {
    try {
      const response = await this.prisma.turn.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.TurnFindUniqueArgs) {
    try {
      const response = await this.prisma.turn.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.TurnUpdateArgs) {
    try {
      const response = await this.prisma.turn.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.TurnDeleteArgs) {
    try {
      const response = await this.prisma.turn.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
