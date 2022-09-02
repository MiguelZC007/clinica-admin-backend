import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Receta')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medication' })
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicationDto) {
    const params: Prisma.MedicationCreateArgs = {
      data: data as Prisma.MedicationUncheckedCreateInput,
    };
    return this.medicationService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicationFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicationService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicationFindUniqueArgs = {
      where: { id: id }
    };
    return this.medicationService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMedicationDto,
  ) {
    const params: Prisma.MedicationUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicationUncheckedUpdateInput,
    };
    return this.medicationService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicationDeleteArgs = {
      where: { id: id }
    };
    return this.medicationService.delete(params);
  }
}
