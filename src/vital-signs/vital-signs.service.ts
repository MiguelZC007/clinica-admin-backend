import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VitalSignsService {

  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.VitalSignsCreateArgs) {
    try {
      const response: any = await this.prisma.vitalSigns.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.VitalSignsFindManyArgs) {
    try {
      const response: any = await this.prisma.vitalSigns.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.VitalSignsFindUniqueArgs) {
    try {
      const response: any = await this.prisma.vitalSigns.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.VitalSignsUpdateArgs) {
    try {
      const response: any = await this.prisma.vitalSigns.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.VitalSignsDeleteArgs) {
    try {
      const response: any = await this.prisma.vitalSigns.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
