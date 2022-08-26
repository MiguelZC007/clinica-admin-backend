import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TurnMachineService } from './turn-machine.service';
import { CreateTurnMachineDto } from './dto/create-turn-machine.dto';
import { UpdateTurnMachineDto } from './dto/update-turn-machine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Maquinas del Turno de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'turn-machine' })
export class TurnMachineController {
  constructor(private readonly turnMachineService: TurnMachineService) { }

  @Post()
  @Auth()
  create(@Body() data: CreateTurnMachineDto) {
    const params: Prisma.TurnMachineCreateArgs = {
      data: data as Prisma.TurnMachineUncheckedCreateInput,
      include: this.turnMachineService.turn_machine_include,
    };
    return this.turnMachineService.create(params);
  }

  @Get()
  @Auth()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.TurnMachineFindManyArgs = {
      include: this.turnMachineService.turn_machine_include,
      orderBy: [
        {
          turn: {
            name: 'asc',
          },
        },
        {
          machine: {
            number_machine: 'asc',
          },
        },
      ],
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.turnMachineService.findMany(params);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    const params: Prisma.TurnMachineFindUniqueArgs = {
      where: { id: id },
      include: this.turnMachineService.turn_machine_include,
    };
    return this.turnMachineService.findUnique(params);
  }

  @Get('turn/:turn_id')
  @Auth()
  findTurn(@Param('turn_id') turn_id: string) {
    const params: Prisma.TurnMachineFindManyArgs = {
      where: { turn_id: turn_id },
      include: {
        machine: true
      }
    };
    return this.turnMachineService.findMany(params);
  }

  @Put(':id')
  @Auth()
  update(@Param('id') id: string, @Body() data: UpdateTurnMachineDto) {
    const params: Prisma.TurnMachineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.TurnMachineUncheckedUpdateInput,
      include: this.turnMachineService.turn_machine_include,
    };
    return this.turnMachineService.update(params);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    const params: Prisma.TurnMachineDeleteArgs = {
      where: { id: id },
      include: this.turnMachineService.turn_machine_include,
    };
    return this.turnMachineService.delete(params);
  }
}
