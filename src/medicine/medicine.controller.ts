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
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Medicamento')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medicine' })
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicineDto) {
    const params: Prisma.MedicineCreateArgs = {
      data: data as Prisma.MedicineUncheckedCreateInput,
    };
    return this.medicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.medicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateMedicineDto) {
    const params: Prisma.MedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicineUncheckedUpdateInput,
    };
    return this.medicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicineDeleteArgs = {
      where: { id: id },
    };
    return this.medicineService.delete(params);
  }
}

