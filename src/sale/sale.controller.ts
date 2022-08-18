import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
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
  constructor(private readonly saleService: SaleService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSaleDto) {
    let params: Prisma.SaleCreateArgs = {
      data: data as Prisma.SaleUncheckedCreateInput,
    };
    return this.saleService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.SaleFindManyArgs = {
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      let skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.saleService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    let params: Prisma.SaleFindUniqueArgs = {
      where: { id: id },
    };
    return this.saleService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateSaleDto) {
    let params: Prisma.SaleUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SaleUncheckedUpdateInput,
    };
    return this.saleService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    let params: Prisma.SaleDeleteArgs = {
      where: { id: id },
    };
    return this.saleService.delete(params);
  }
}
