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
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Payment')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'payment' })
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() data: CreatePaymentDto) {
    let params: Prisma.PaymentCreateArgs = {
      data: data as Prisma.PaymentUncheckedCreateInput,
    };
    return this.paymentService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.PaymentFindManyArgs = {
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
    return this.paymentService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.PaymentFindUniqueArgs = {
      where: { id: id },
    };
    return this.paymentService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdatePaymentDto) {
    let params: Prisma.PaymentUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PaymentUncheckedUpdateInput,
    };
    return this.paymentService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.PaymentDeleteArgs = {
      where: { id: id },
    };
    return this.paymentService.delete(params);
  }
}
