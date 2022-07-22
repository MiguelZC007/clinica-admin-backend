import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Prisma } from '@prisma/client';

@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Post()
  create(@Body() data: CreateSpecialtyDto) {
    let params: Prisma.SpecialtyCreateArgs = {
      data: data as Prisma.SpecialtyUncheckedCreateInput,
    };
    return this.specialtyService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.SpecialtyFindManyArgs = {
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      let skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.specialtyService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.SpecialtyFindUniqueArgs = {
      where: { id: id },
    };
    return this.specialtyService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateSpecialtyDto) {
    let params: Prisma.SpecialtyUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SpecialtyUncheckedUpdateInput,
    };
    return this.specialtyService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.SpecialtyDeleteArgs = {
      where: { id: id },
    };
    return this.specialtyService.delete(params);
  }
}
