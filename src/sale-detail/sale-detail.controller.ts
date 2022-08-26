import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SaleDetailService } from './sale-detail.service';
import { CreateSaleDetailDto } from './dto/create-sale-detail.dto';
import { UpdateSaleDetailDto } from './dto/update-sale-detail.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Sale Detail')
@ApiBearerAuth()
@Controller({ version: '1', path: 'sale-detail' })
export class SaleDetailController {
  constructor(private readonly saleDetailService: SaleDetailService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSaleDetailDto) {
    const params: Prisma.SaleDetailCreateArgs = {
      data: data as Prisma.SaleDetailUncheckedCreateInput,
    };
    return this.saleDetailService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.SaleDetailFindManyArgs = {
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
    return this.saleDetailService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.SaleDetailFindUniqueArgs = {
      where: { id: id },
    };
    return this.saleDetailService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateSaleDetailDto) {
    const params: Prisma.SaleDetailUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SaleDetailUncheckedUpdateInput,
    };
    return this.saleDetailService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.SaleDetailDeleteArgs = {
      where: { id: id },
    };
    return this.saleDetailService.delete(params);
  }
}
