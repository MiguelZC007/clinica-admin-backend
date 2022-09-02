import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Historias Medicas de Los Pacientes')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medical-history' })
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicalHistoryDto) {
    const params: Prisma.MedicalHistoryCreateArgs = {
      data: data as Prisma.MedicalHistoryUncheckedCreateInput,
    };
    return this.medicalHistoryService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicalHistoryFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicalHistoryService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicalHistoryFindUniqueArgs = {
      where: { id: id }
    };
    return this.medicalHistoryService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMedicalHistoryDto,
  ) {
    const params: Prisma.MedicalHistoryUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicalHistoryUncheckedUpdateInput,
    };
    return this.medicalHistoryService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicalHistoryDeleteArgs = {
      where: { id: id }
    };
    return this.medicalHistoryService.delete(params);
  }
}
