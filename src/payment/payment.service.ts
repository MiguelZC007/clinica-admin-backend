import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PaymentCreateArgs) {
    try {
      const response = await this.prisma.payment.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.PaymentFindManyArgs) {
    try {
      const response = await this.prisma.payment.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.PaymentFindUniqueArgs) {
    try {
      const response = await this.prisma.payment.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.PaymentFindFirstArgs) {
    try {
      const response = await this.prisma.payment.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.PaymentUpdateArgs) {
    try {
      const response = await this.prisma.payment.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.PaymentUpdateManyArgs) {
    try {
      const response = await this.prisma.payment.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.PaymentDeleteArgs) {
    try {
      const response = await this.prisma.payment.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
