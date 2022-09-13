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
import { MedicineGenericNameService } from './medicine-generic-name.service';
import { CreateMedicineGenericNameDto } from './dto/create-medicine-generic-name.dto';
import { UpdateMedicineGenericNameDto } from './dto/update-medicine-generic-name.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Nombres Genericos de los Medicamentos')
@ApiBearerAuth()
@Controller({ version: '1', path: 'medicine-generic-name' })
export class MedicineGenericNameController {
  constructor(
    private readonly medicineGenericNameService: MedicineGenericNameService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMedicineGenericNameDto) {
    const params: Prisma.MedicineGenericNameCreateArgs = {
      data: data as Prisma.MedicineGenericNameUncheckedCreateInput,
    };
    return this.medicineGenericNameService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MedicineGenericNameFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.medicineGenericNameService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MedicineGenericNameFindUniqueArgs = {
      where: { id: id },
    };
    return this.medicineGenericNameService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateMedicineGenericNameDto) {
    const params: Prisma.MedicineGenericNameUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MedicineGenericNameUncheckedUpdateInput,
    };
    return this.medicineGenericNameService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MedicineGenericNameDeleteArgs = {
      where: { id: id },
    };
    return this.medicineGenericNameService.delete(params);
  }
}

