import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { VitalSignsService } from './vital-signs.service';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';


@ApiTags('Signos vitales')
@ApiBearerAuth()
@Controller({ version: '1', path: 'vital-signs' })
export class VitalSignsController {
  constructor(private readonly vitalSignsService: VitalSignsService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateVitalSignDto) {
    const params: Prisma.VitalSignsCreateArgs = {
      data: data as Prisma.VitalSignsUncheckedCreateInput,
    };
    return this.vitalSignsService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.VitalSignsFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.vitalSignsService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.VitalSignsFindUniqueArgs = {
      where: { id: id }
    };
    return this.vitalSignsService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateVitalSignDto,
  ) {
    const params: Prisma.VitalSignsUpdateArgs = {
      where: { id: id },
      data: data as Prisma.VitalSignsUncheckedUpdateInput,
    };
    return this.vitalSignsService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.VitalSignsDeleteArgs = {
      where: { id: id }
    };
    return this.vitalSignsService.delete(params);
  }
}
