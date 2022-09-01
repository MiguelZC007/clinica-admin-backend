import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ImagingDetailService } from './imaging-detail.service';
import { CreateImagingDetailDto } from './dto/create-imaging-detail.dto';
import { UpdateImagingDetailDto } from './dto/update-imaging-detail.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Detalles de Imagenologia')
@ApiBearerAuth()
@Controller({ version: '1', path: 'imaging-detail' })
export class ImagingDetailController {
  constructor(private readonly imagingDetailService: ImagingDetailService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateImagingDetailDto) {
    const params: Prisma.ImagingDetailCreateArgs = {
      data: data as Prisma.ImagingDetailUncheckedCreateInput,
    };
    return this.imagingDetailService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ImagingDetailFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.imagingDetailService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ImagingDetailFindUniqueArgs = {
      where: { id: id }
    };
    return this.imagingDetailService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateImagingDetailDto,
  ) {
    const params: Prisma.ImagingDetailUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ImagingDetailUncheckedUpdateInput,
    };
    return this.imagingDetailService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ImagingDetailDeleteArgs = {
      where: { id: id }
    };
    return this.imagingDetailService.delete(params);
  }
}
