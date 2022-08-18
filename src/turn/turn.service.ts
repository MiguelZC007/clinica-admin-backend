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
      let response = await this.prisma.turn.create(params);
      let machines = await this.prisma.machine.findMany({});
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
        include: this.turn_include,
      });
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.TurnFindManyArgs) {
    try {
      let response = await this.prisma.turn.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.TurnFindUniqueArgs) {
    try {
      let response = await this.prisma.turn.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.TurnUpdateArgs) {
    try {
      let response = await this.prisma.turn.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.TurnDeleteArgs) {
    try {
      let response = await this.prisma.turn.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
