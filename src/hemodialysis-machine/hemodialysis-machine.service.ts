import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { TurnMachineService } from 'src/turn-machine/turn-machine.service';

@Injectable()
export class HemodialysisMachineService {
  constructor(
    private prisma: PrismaService,
    private turnMachineService: TurnMachineService,
  ) {}

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
      const machine_turn = await this.turnMachineService.findUnique({
        where: { id: params.data.turn_machine_id },
      });
      if (machine_turn.state != 'OCUPADO') {
        const response: any = await this.prisma.hemodialysisMachine.create(
          params,
        );
        await this.turnMachineService.update({
          where: { id: response.turn_machine_id },
          data: { state: 'OCUPADO' },
        });
        return response;
      } else {
        throw new Error('La maquina ya esta ocupada');
      }
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
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findFirst(params: Prisma.HemodialysisMachineFindFirstArgs) {
    try {
      const response: any = await this.prisma.hemodialysisMachine.findFirst(
        params,
      );
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.HemodialysisMachineUpdateArgs) {
    try {
      if (params?.data?.turn_machine_id != null) {
        const machine_turn = await this.turnMachineService.findUnique({
          where: { id: params.data.turn_machine_id.toString() },
        });
        const user_machine = await this.findUnique({ where: params.where });
        if (
          machine_turn.state != 'OCUPADO' &&
          user_machine.turn_machine_id != params.data.turn_machine_id
        ) {
          const response: any = await this.prisma.hemodialysisMachine.update(
            params,
          );
          await this.turnMachineService.update({
            where: { id: response.turn_machine_id },
            data: { state: 'OCUPADO' },
          });
          return response;
        } else {
          throw new Error('La maquina ya esta ocupada');
        }
      }
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
