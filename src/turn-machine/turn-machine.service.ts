import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTurnMachineDto } from './dto/create-turn-machine.dto';
import { UpdateTurnMachineDto } from './dto/update-turn-machine.dto';

@Injectable()
export class TurnMachineService {
  constructor(private prisma: PrismaService) {}
  public turn_machine_include: Prisma.TurnMachineInclude = {
    turn: true,
    machine: true,
  };

  async create(params: Prisma.TurnMachineCreateArgs) {
    try {
      const response: any = await this.prisma.turnMachine.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.TurnMachineFindManyArgs) {
    try {
      const response: any = await this.prisma.turnMachine.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.TurnMachineFindUniqueArgs) {
    try {
      const response: any = await this.prisma.turnMachine.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.TurnMachineUpdateArgs) {
    try {
      const response: any = await this.prisma.turnMachine.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.TurnMachineDeleteArgs) {
    try {
      const response: any = await this.prisma.turnMachine.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
