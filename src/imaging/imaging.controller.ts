import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ImagingService } from './imaging.service';
import { CreateImagingDto } from './dto/create-imaging.dto';
import { UpdateImagingDto } from './dto/update-imaging.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Imagenologia')
@ApiBearerAuth()
@Controller({ version: '1', path: 'imaging' })
export class ImagingController {
  constructor(private readonly imagingService: ImagingService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateImagingDto) {
    const params: Prisma.ImagingCreateArgs = {
      data: data as Prisma.ImagingUncheckedCreateInput,
    };
    return this.imagingService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ImagingFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.imagingService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ImagingFindUniqueArgs = {
      where: { id: id }
    };
    return this.imagingService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateImagingDto,
  ) {
    const params: Prisma.ImagingUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ImagingUncheckedUpdateInput,
    };
    return this.imagingService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ImagingDeleteArgs = {
      where: { id: id }
    };
    return this.imagingService.delete(params);
  }
}
