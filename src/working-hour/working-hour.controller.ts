import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { WorkingHourService } from './working-hour.service';
import { CreateWorkingHourDto } from './dto/create-working-hour.dto';
import { UpdateWorkingHourDto } from './dto/update-working-hour.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Horarios de Trabajo')
@ApiBearerAuth()
@Controller({ version: '1', path: 'working-hour' })
export class WorkingHourController {
  constructor(private readonly workingHourService: WorkingHourService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateWorkingHourDto) {
    const params: Prisma.WorkingHourCreateArgs = {
      data: data as Prisma.WorkingHourUncheckedCreateInput,
    };
    return this.workingHourService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.WorkingHourFindManyArgs = {
      orderBy: {
        updatedAt: "desc"
      },
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.workingHourService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.WorkingHourFindUniqueArgs = {
      where: { id: id }
    };
    return this.workingHourService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateWorkingHourDto,
  ) {
    const params: Prisma.WorkingHourUpdateArgs = {
      where: { id: id },
      data: data as Prisma.WorkingHourUncheckedUpdateInput,
    };
    return this.workingHourService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.WorkingHourDeleteArgs = {
      where: { id: id }
    };
    return this.workingHourService.delete(params);
  }
}
