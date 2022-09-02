import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { MedicalHistoryDetailService } from './medical-history-detail.service';
import { CreateMedicalHistoryDetailDto } from './dto/create-medical-history-detail.dto';
import { UpdateMedicalHistoryDetailDto } from './dto/update-medical-history-detail.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Detalles del Historial Medico del Paciente')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medical-history-detail' })
export class MedicalHistoryDetailController {
  constructor(private readonly medicalHistoryDetailService: MedicalHistoryDetailService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicalHistoryDetailDto) {
    const params: Prisma.MedicalHistoryDetailCreateArgs = {
      data: data as Prisma.MedicalHistoryDetailUncheckedCreateInput,
    };
    return this.medicalHistoryDetailService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicalHistoryDetailFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicalHistoryDetailService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicalHistoryDetailFindUniqueArgs = {
      where: { id: id }
    };
    return this.medicalHistoryDetailService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMedicalHistoryDetailDto,
  ) {
    const params: Prisma.MedicalHistoryDetailUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicalHistoryDetailUncheckedUpdateInput,
    };
    return this.medicalHistoryDetailService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicalHistoryDetailDeleteArgs = {
      where: { id: id }
    };
    return this.medicalHistoryDetailService.delete(params);
  }
}
