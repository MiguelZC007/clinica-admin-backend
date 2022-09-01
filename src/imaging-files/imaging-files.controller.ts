import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ImagingFilesService } from './imaging-files.service';
import { CreateImagingFileDto } from './dto/create-imaging-file.dto';
import { UpdateImagingFileDto } from './dto/update-imaging-file.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Archivos de Imagenologia')
@ApiBearerAuth()
@Controller({ version: '1', path: 'imaging-files' })
export class ImagingFilesController {
  constructor(private readonly imagingFilesService: ImagingFilesService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateImagingFileDto) {
    const params: Prisma.ImagingFilesCreateArgs = {
      data: data as Prisma.ImagingFilesUncheckedCreateInput,
    };
    return this.imagingFilesService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ImagingFilesFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.imagingFilesService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ImagingFilesFindUniqueArgs = {
      where: { id: id }
    };
    return this.imagingFilesService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateImagingFileDto,
  ) {
    const params: Prisma.ImagingFilesUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ImagingFilesUncheckedUpdateInput,
    };
    return this.imagingFilesService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ImagingFilesDeleteArgs = {
      where: { id: id }
    };
    return this.imagingFilesService.delete(params);
  }
}
