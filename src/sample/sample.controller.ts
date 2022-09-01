import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { SampleService } from './sample.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Muestras')
@ApiBearerAuth()
@Controller({ version: '1', path: 'sample' })
export class SampleController {
  constructor(private readonly sampleService: SampleService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSampleDto) {
    const params: Prisma.SampleCreateArgs = {
      data: data as Prisma.SampleUncheckedCreateInput,
    };
    return this.sampleService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.SampleFindManyArgs = {
      orderBy: [
        {
          updatedAt: 'desc',
        }
      ],
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.sampleService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.SampleFindUniqueArgs = {
      where: { id: id }
    };
    return this.sampleService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateSampleDto,
  ) {
    const params: Prisma.SampleUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SampleUncheckedUpdateInput,
    };
    return this.sampleService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.SampleDeleteArgs = {
      where: { id: id }
    };
    return this.sampleService.delete(params);
  }
}
