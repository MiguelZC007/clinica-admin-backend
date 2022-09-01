import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { IcdService } from './icd.service';
import { CreateIcdDto } from './dto/create-icd.dto';
import { UpdateIcdDto } from './dto/update-icd.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Enfermedades del Estadar ICD-11')
@ApiBearerAuth()
@Controller({ version: '1', path: 'icd' })
export class IcdController {
  constructor(private readonly icdService: IcdService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateIcdDto) {
    const params: Prisma.IcdCreateArgs = {
      data: data as Prisma.IcdUncheckedCreateInput,
    };
    return this.icdService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.IcdFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.icdService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.IcdFindUniqueArgs = {
      where: { id: id }
    };
    return this.icdService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateIcdDto,
  ) {
    const params: Prisma.IcdUpdateArgs = {
      where: { id: id },
      data: data as Prisma.IcdUncheckedUpdateInput,
    };
    return this.icdService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.IcdDeleteArgs = {
      where: { id: id }
    };
    return this.icdService.delete(params);
  }
}
