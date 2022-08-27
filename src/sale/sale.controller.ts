import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('sale')
@ApiBearerAuth()
@Controller({ version: '1', path: 'sale' })
export class SaleController {
  constructor(private readonly saleService: SaleService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSaleDto) {
    const params: Prisma.SaleCreateArgs = {
      data: data as Prisma.SaleUncheckedCreateInput,
    };
    return this.saleService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.SaleFindManyArgs = {
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.saleService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.SaleFindUniqueArgs = {
      where: { id: id },
    };
    return this.saleService.findUnique(params);
  }

  @Get('patient/:patient_id')
  @Auth('ADMIN')
  findPatient(@Param('patient_id') patient_id: string) {
    const params: Prisma.SaleFindManyArgs = {
      where: {
        patient_id: patient_id,
      },
      orderBy: {
        updatedAt: "desc"
      }
    };
    return this.saleService.findMany(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateSaleDto) {
    const params: Prisma.SaleUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SaleUncheckedUpdateInput,
    };
    return this.saleService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.SaleDeleteArgs = {
      where: { id: id },
    };
    return this.saleService.delete(params);
  }
}
