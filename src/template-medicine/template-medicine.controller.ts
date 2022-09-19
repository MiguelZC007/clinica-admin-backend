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
import { TemplateMedicineService } from './template-medicine.service';
import { CreateTemplateMedicineDto } from './dto/create-template-medicine.dto';
import { UpdateTemplateMedicineDto } from './dto/update-template-medicine.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Preseleccion de Medicamentos')
@ApiBearerAuth()
@Controller({ version: '1', path: 'template-medicine' })
export class TemplateMedicineController {
  constructor(
    private readonly templateMedicineService: TemplateMedicineService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateTemplateMedicineDto) {
    const params: Prisma.TemplateMedicineCreateArgs = {
      data: data as Prisma.TemplateMedicineUncheckedCreateInput,
    };
    return this.templateMedicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.TemplateMedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.templateMedicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.TemplateMedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.templateMedicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateTemplateMedicineDto) {
    const params: Prisma.TemplateMedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.TemplateMedicineUncheckedUpdateInput,
    };
    return this.templateMedicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.TemplateMedicineDeleteArgs = {
      where: { id: id },
    };
    return this.templateMedicineService.delete(params);
  }
}

