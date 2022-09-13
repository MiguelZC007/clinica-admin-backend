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
import { MakerMedicineService } from './maker-medicine.service';
import { CreateMakerMedicineDto } from './dto/create-maker-medicine.dto';
import { UpdateMakerMedicineDto } from './dto/update-maker-medicine.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Fabricante del Medicamento')
@ApiBearerAuth()
@Controller({ version: '1', path: 'maker-medicine' })
export class MakerMedicineController {
  constructor(private readonly makerMedicineService: MakerMedicineService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMakerMedicineDto) {
    const params: Prisma.MakerMedicineCreateArgs = {
      data: data as Prisma.MakerMedicineUncheckedCreateInput,
    };
    return this.makerMedicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.MakerMedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.makerMedicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MakerMedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.makerMedicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateMakerMedicineDto) {
    const params: Prisma.MakerMedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MakerMedicineUncheckedUpdateInput,
    };
    return this.makerMedicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MakerMedicineDeleteArgs = {
      where: { id: id },
    };
    return this.makerMedicineService.delete(params);
  }
}

