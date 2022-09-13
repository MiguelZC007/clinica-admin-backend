import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PharmaceuticalFormService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.PharmaceuticalFormCreateArgs) {
    try {
      const response: any = await this.prisma.pharmaceuticalForm.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.PharmaceuticalFormFindManyArgs) {
    try {
      const response: any = await this.prisma.pharmaceuticalForm.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.PharmaceuticalFormFindUniqueArgs) {
    try {
      const response: any = await this.prisma.pharmaceuticalForm.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.PharmaceuticalFormUpdateArgs) {
    try {
      const response: any = await this.prisma.pharmaceuticalForm.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.PharmaceuticalFormDeleteArgs) {
    try {
      const response: any = await this.prisma.pharmaceuticalForm.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

