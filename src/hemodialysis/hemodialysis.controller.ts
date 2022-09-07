import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HemodialysisService } from './hemodialysis.service';
import { CreateHemodialysisDto } from './dto/create-hemodialysis.dto';
import { UpdateHemodialysisDto } from './dto/update-hemodialysis.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'hemodialysis' })
export class HemodialysisController {
  constructor(private hemodialysisService: HemodialysisService) {}

  @Get('patient/:patient_id')
  findPatient(@Param('patient_id') patient_id: string) {
    const params: Prisma.HemodialysisFindUniqueArgs = {
      where: { patient_id: patient_id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.findUnique(params);
  }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateHemodialysisDto) {
    const params: Prisma.HemodialysisCreateArgs = {
      data: data as Prisma.HemodialysisUncheckedCreateInput,
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.HemodialysisFindManyArgs = {
      include: this.hemodialysisService.hemodialysis_include,
      orderBy: {
        patient: {
          name: 'asc',
        },
      },
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.hemodialysisService.findMany(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const params: Prisma.HemodialysisFindUniqueArgs = {
      where: { id: id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateHemodialysisDto) {
    const params: Prisma.HemodialysisUpdateArgs = {
      where: {
        id: id,
      },
      data: data as Prisma.HemodialysisUncheckedUpdateInput,
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.HemodialysisDeleteArgs = {
      where: { id: id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.delete(params);
  }
}
