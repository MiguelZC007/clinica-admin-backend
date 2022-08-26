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
import { HemodialysisMachineService } from './hemodialysis-machine.service';
import { CreateHemodialysisMachineDto } from './dto/create-hemodialysis-machine.dto';
import { UpdateHemodialysisMachineDto } from './dto/update-hemodialysis-machine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Turnos asignados a los pacientes de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'hemodialysis-machine' })
export class HemodialysisMachineController {
  constructor(
    private readonly hemodialysisMachineService: HemodialysisMachineService,
  ) { }

  @Post()
  @Auth()
  create(@Body() data: CreateHemodialysisMachineDto) {
    const params: Prisma.HemodialysisMachineCreateArgs = {
      data: data as Prisma.HemodialysisMachineUncheckedCreateInput,
      include: this.hemodialysisMachineService.hemodialysis_machine_include,
    };
    return this.hemodialysisMachineService.create(params);
  }

  @Get()
  @Auth()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.HemodialysisMachineFindManyArgs = {
      include: this.hemodialysisMachineService.hemodialysis_machine_include,
      orderBy: [
        {
          hemodialysis: {
            patient: {
              name: 'asc',
            },
          },
        },
        {
          turn_machine: {
            turn: {
              name: 'asc',
            },
          },
        },
        {
          turn_machine: {
            machine: {
              number_machine: 'asc',
            },
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
    return this.hemodialysisMachineService.findMany(params);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    const params: Prisma.HemodialysisMachineFindUniqueArgs = {
      where: { id: id },
      include: this.hemodialysisMachineService.hemodialysis_machine_include,
    };
    return this.hemodialysisMachineService.findUnique(params);
  }

  @Put(':id')
  @Auth()
  update(@Param('id') id: string, @Body() data: UpdateHemodialysisMachineDto) {
    const params: Prisma.HemodialysisMachineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.HemodialysisMachineUncheckedUpdateInput,
      include: this.hemodialysisMachineService.hemodialysis_machine_include,
    };
    return this.hemodialysisMachineService.update(params);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    const params: Prisma.HemodialysisMachineDeleteArgs = {
      where: { id: id },
      include: this.hemodialysisMachineService.hemodialysis_machine_include,
    };
    return this.hemodialysisMachineService.delete(params);
  }
}
