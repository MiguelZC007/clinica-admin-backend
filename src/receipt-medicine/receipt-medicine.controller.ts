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
import { ReceiptMedicineService } from './receipt-medicine.service';
import { CreateReceiptMedicineDto } from './dto/create-receipt-medicine.dto';
import { UpdateReceiptMedicineDto } from './dto/update-receipt-medicine.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Medicinas del Recibo Recetario - Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'receipt-medicine' })
export class ReceiptMedicineController {
  constructor(
    private readonly receiptMedicineService: ReceiptMedicineService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateReceiptMedicineDto) {
    const params: Prisma.ReceiptMedicineCreateArgs = {
      data: data as Prisma.ReceiptMedicineUncheckedCreateInput,
    };
    return this.receiptMedicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ReceiptMedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.receiptMedicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ReceiptMedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.receiptMedicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateReceiptMedicineDto) {
    const params: Prisma.ReceiptMedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ReceiptMedicineUncheckedUpdateInput,
    };
    return this.receiptMedicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ReceiptMedicineDeleteArgs = {
      where: { id: id },
    };
    return this.receiptMedicineService.delete(params);
  }
}

