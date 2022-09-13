import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttentionSheetService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.AttentionSheetCreateArgs) {
    try {
      const response: any = await this.prisma.attentionSheet.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.AttentionSheetFindManyArgs) {
    try {
      const response: any = await this.prisma.attentionSheet.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.AttentionSheetFindUniqueArgs) {
    try {
      const response: any = await this.prisma.attentionSheet.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.AttentionSheetUpdateArgs) {
    try {
      const response: any = await this.prisma.attentionSheet.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.AttentionSheetDeleteArgs) {
    try {
      const response: any = await this.prisma.attentionSheet.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

