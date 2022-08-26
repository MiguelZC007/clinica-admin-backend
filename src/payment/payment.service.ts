import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PaymentCreateArgs) {
    try {
      const data = await this.prisma.payment.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.PaymentFindManyArgs) {
    try {
      const data = await this.prisma.payment.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.PaymentFindUniqueArgs) {
    try {
      const data = await this.prisma.payment.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.PaymentFindFirstArgs) {
    try {
      const data = await this.prisma.payment.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.PaymentUpdateArgs) {
    try {
      const data = await this.prisma.payment.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.PaymentUpdateManyArgs) {
    try {
      const data = await this.prisma.payment.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.PaymentDeleteArgs) {
    try {
      const data = await this.prisma.payment.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
