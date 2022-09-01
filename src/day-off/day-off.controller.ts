import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { DayOffService } from './day-off.service';
import { CreateDayOffDto } from './dto/create-day-off.dto';
import { UpdateDayOffDto } from './dto/update-day-off.dto';

@ApiTags('Dias Libres')
@ApiBearerAuth()
@Controller({ version: '1', path: 'day-off' })
export class DayOffController {
  constructor(private readonly dayOffService: DayOffService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateDayOffDto) {
    const params: Prisma.DayOffCreateArgs = {
      data: data as Prisma.DayOffUncheckedCreateInput,
    };
    return this.dayOffService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.DayOffFindManyArgs = {
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
    return this.dayOffService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.DayOffFindUniqueArgs = {
      where: { id: id }
    };
    return this.dayOffService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateDayOffDto,
  ) {
    const params: Prisma.DayOffUpdateArgs = {
      where: { id: id },
      data: data as Prisma.DayOffUncheckedUpdateInput,
    };
    return this.dayOffService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.DayOffDeleteArgs = {
      where: { id: id }
    };
    return this.dayOffService.delete(params);
  }
}
