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
import { MedicineConcentrationService } from './medicine-concentration.service';
import { CreateMedicineConcentrationDto } from './dto/create-medicine-concentration.dto';
import { UpdateMedicineConcentrationDto } from './dto/update-medicine-concentration.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Concentraciones de los Medicamentos')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medicine-concentration' })
export class MedicineConcentrationController {
  constructor(
    private readonly medicineConcentrationService: MedicineConcentrationService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicineConcentrationDto) {
    const params: Prisma.MedicineConcentrationCreateArgs = {
      data: data as Prisma.MedicineConcentrationUncheckedCreateInput,
    };
    return this.medicineConcentrationService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicineConcentrationFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicineConcentrationService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicineConcentrationFindUniqueArgs = {
      where: { id: id },
    };
    return this.medicineConcentrationService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMedicineConcentrationDto,
  ) {
    const params: Prisma.MedicineConcentrationUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicineConcentrationUncheckedUpdateInput,
    };
    return this.medicineConcentrationService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicineConcentrationDeleteArgs = {
      where: { id: id },
    };
    return this.medicineConcentrationService.delete(params);
  }
}

