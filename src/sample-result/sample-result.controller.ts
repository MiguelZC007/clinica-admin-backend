import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { SampleResultService } from './sample-result.service';
import { CreateSampleResultDto } from './dto/create-sample-result.dto';
import { UpdateSampleResultDto } from './dto/update-sample-result.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Resultados de las Muestras')
@ApiBearerAuth()
@Controller({ version: '1', path: 'sample-result' })
export class SampleResultController {
  constructor(private readonly sampleResultService: SampleResultService) { }


  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSampleResultDto) {
    const params: Prisma.SampleResultCreateArgs = {
      data: data as Prisma.SampleResultUncheckedCreateInput,
    };
    return this.sampleResultService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.SampleResultFindManyArgs = {
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
    return this.sampleResultService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.SampleResultFindUniqueArgs = {
      where: { id: id }
    };
    return this.sampleResultService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateSampleResultDto,
  ) {
    const params: Prisma.SampleResultUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SampleResultUncheckedUpdateInput,
    };
    return this.sampleResultService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.SampleResultDeleteArgs = {
      where: { id: id }
    };
    return this.sampleResultService.delete(params);
  }
}
