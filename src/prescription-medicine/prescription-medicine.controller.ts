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
import { PrescriptionMedicineService } from './prescription-medicine.service';
import { CreatePrescriptionMedicineDto } from './dto/create-prescription-medicine.dto';
import { UpdatePrescriptionMedicineDto } from './dto/update-prescription-medicine.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Medicamentos de la Preseleccion')
@ApiBearerAuth()
@Controller({ version: '1', path: 'prescription-medicine' })
export class PrescriptionMedicineController {
  constructor(
    private readonly prescriptionMedicineService: PrescriptionMedicineService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePrescriptionMedicineDto) {
    const params: Prisma.PrescriptionMedicineCreateArgs = {
      data: data as Prisma.PrescriptionMedicineUncheckedCreateInput,
    };
    return this.prescriptionMedicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.PrescriptionMedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.prescriptionMedicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PrescriptionMedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.prescriptionMedicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdatePrescriptionMedicineDto) {
    const params: Prisma.PrescriptionMedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PrescriptionMedicineUncheckedUpdateInput,
    };
    return this.prescriptionMedicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PrescriptionMedicineDeleteArgs = {
      where: { id: id },
    };
    return this.prescriptionMedicineService.delete(params);
  }
}

