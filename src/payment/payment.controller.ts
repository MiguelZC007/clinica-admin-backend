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
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Payment')
@ApiBearerAuth()
@Controller({ version: '1', path: 'payment' })
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePaymentDto) {
    const params: Prisma.PaymentCreateArgs = {
      data: data as Prisma.PaymentUncheckedCreateInput,
    };
    return this.paymentService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.PaymentFindManyArgs = {
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
    return this.paymentService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PaymentFindUniqueArgs = {
      where: { id: id },
    };
    return this.paymentService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdatePaymentDto) {
    const params: Prisma.PaymentUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PaymentUncheckedUpdateInput,
    };
    return this.paymentService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PaymentDeleteArgs = {
      where: { id: id },
    };
    return this.paymentService.delete(params);
  }
}
