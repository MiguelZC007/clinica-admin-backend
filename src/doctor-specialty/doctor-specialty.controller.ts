import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { DoctorSpecialtyService } from './doctor-specialty.service';
import { CreateDoctorSpecialtyDto } from './dto/create-doctor-specialty.dto';
import { UpdateDoctorSpecialtyDto } from './dto/update-doctor-specialty.dto';


@ApiTags('Especialidades asignadas a los doctores')
@ApiBearerAuth()
@Controller({ version: '1', path: 'doctor-specialty' })
export class DoctorSpecialtyController {
  constructor(private readonly doctorSpecialtyService: DoctorSpecialtyService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateDoctorSpecialtyDto) {
    const params: Prisma.DoctorSpecialtyCreateArgs = {
      data: data as Prisma.DoctorSpecialtyUncheckedCreateInput,
    };
    return this.doctorSpecialtyService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.DoctorSpecialtyFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.doctorSpecialtyService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.DoctorSpecialtyFindUniqueArgs = {
      where: { id: id }
    };
    return this.doctorSpecialtyService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateDoctorSpecialtyDto,
  ) {
    const params: Prisma.DoctorSpecialtyUpdateArgs = {
      where: { id: id },
      data: data as Prisma.DoctorSpecialtyUncheckedUpdateInput,
    };
    return this.doctorSpecialtyService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.DoctorSpecialtyDeleteArgs = {
      where: { id: id }
    };
    return this.doctorSpecialtyService.delete(params);
  }
}
