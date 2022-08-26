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
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Maquinas de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'machine' })
export class MachineController {
  constructor(private readonly machineService: MachineService) { }

  @Post()
  @Auth()
  create(@Body() data: CreateMachineDto) {
    const params: Prisma.MachineCreateArgs = {
      data: data as Prisma.MachineUncheckedCreateInput,
    };
    return this.machineService.create(params);
  }

  @Get()
  @Auth()
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.MachineFindManyArgs = {
      orderBy: {
        number_machine: 'asc',
      },
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.machineService.findMany(params);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    const params: Prisma.MachineFindUniqueArgs = {
      where: { id: id },
    };
    return this.machineService.findUnique(params);
  }

  @Put(':id')
  @Auth()
  update(@Param('id') id: string, @Body() data: UpdateMachineDto) {
    const params: Prisma.MachineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MachineUncheckedUpdateInput,
    };
    return this.machineService.update(params);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    const params: Prisma.MachineDeleteArgs = {
      where: { id: id },
    };
    return this.machineService.delete(params);
  }
}
