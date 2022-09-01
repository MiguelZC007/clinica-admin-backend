import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { AddendumService } from './addendum.service';
import { CreateAddendumDto } from './dto/create-addendum.dto';
import { UpdateAddendumDto } from './dto/update-addendum.dto';

@ApiTags('Adendas')
@ApiBearerAuth()
@Controller({ version: '1', path: 'addendum' })
export class AddendumController {
  constructor(private readonly addendumService: AddendumService) { }
  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateAddendumDto) {
    const params: Prisma.AddendumCreateArgs = {
      data: data as Prisma.AddendumUncheckedCreateInput,
    };
    return this.addendumService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.AddendumFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.addendumService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.AddendumFindUniqueArgs = {
      where: { id: id }
    };
    return this.addendumService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateAddendumDto,
  ) {
    const params: Prisma.AddendumUpdateArgs = {
      where: { id: id },
      data: data as Prisma.AddendumUncheckedUpdateInput,
    };
    return this.addendumService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.AddendumDeleteArgs = {
      where: { id: id }
    };
    return this.addendumService.delete(params);
  }
}
