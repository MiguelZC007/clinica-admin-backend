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
import { PrescriptionService } from './prescription.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Recetas Medicas')
@ApiBearerAuth()
@Controller({ version: '1', path: 'prescription' })
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePrescriptionDto) {
    const params: Prisma.PrescriptionCreateArgs = {
      data: data as Prisma.PrescriptionUncheckedCreateInput,
    };
    return this.prescriptionService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.PrescriptionFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.prescriptionService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PrescriptionFindUniqueArgs = {
      where: { id: id },
    };
    return this.prescriptionService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdatePrescriptionDto) {
    const params: Prisma.PrescriptionUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PrescriptionUncheckedUpdateInput,
    };
    return this.prescriptionService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PrescriptionDeleteArgs = {
      where: { id: id },
    };
    return this.prescriptionService.delete(params);
  }
}

