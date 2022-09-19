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
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Recibo de Medicamentos - Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'receipt' })
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateReceiptDto) {
    const params: Prisma.ReceiptCreateArgs = {
      data: data as Prisma.ReceiptUncheckedCreateInput,
    };
    return this.receiptService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ReceiptFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.receiptService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ReceiptFindUniqueArgs = {
      where: { id: id },
    };
    return this.receiptService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateReceiptDto) {
    const params: Prisma.ReceiptUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ReceiptUncheckedUpdateInput,
    };
    return this.receiptService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ReceiptDeleteArgs = {
      where: { id: id },
    };
    return this.receiptService.delete(params);
  }
}

