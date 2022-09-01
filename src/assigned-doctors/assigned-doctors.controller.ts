import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { AssignedDoctorsService } from './assigned-doctors.service';
import { CreateAssignedDoctorDto } from './dto/create-assigned-doctor.dto';
import { UpdateAssignedDoctorDto } from './dto/update-assigned-doctor.dto';

@ApiTags('Doctores Asignados al Paciente')
@ApiBearerAuth()
@Controller({ version: '1', path: 'assigned-doctors' })
export class AssignedDoctorsController {
  constructor(private readonly assignedDoctorsService: AssignedDoctorsService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateAssignedDoctorDto) {
    const params: Prisma.AssignedDoctorsCreateArgs = {
      data: data as Prisma.AssignedDoctorsUncheckedCreateInput,
    };
    return this.assignedDoctorsService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.AssignedDoctorsFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.assignedDoctorsService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.AssignedDoctorsFindUniqueArgs = {
      where: { id: id }
    };
    return this.assignedDoctorsService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateAssignedDoctorDto,
  ) {
    const params: Prisma.AssignedDoctorsUpdateArgs = {
      where: { id: id },
      data: data as Prisma.AssignedDoctorsUncheckedUpdateInput,
    };
    return this.assignedDoctorsService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.AssignedDoctorsDeleteArgs = {
      where: { id: id }
    };
    return this.assignedDoctorsService.delete(params);
  }
}
