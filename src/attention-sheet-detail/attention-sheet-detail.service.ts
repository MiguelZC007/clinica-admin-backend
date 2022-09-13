import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttentionSheetDetailService {
  constructor(private prisma: PrismaService) {}

  async create(params: Prisma.AttentionSheetDetailCreateArgs) {
    try {
      const response: any = await this.prisma.attentionSheetDetail.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.AttentionSheetDetailFindManyArgs) {
    try {
      const response: any = await this.prisma.attentionSheetDetail.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.AttentionSheetDetailFindUniqueArgs) {
    try {
      const response: any = await this.prisma.attentionSheetDetail.findUnique(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.AttentionSheetDetailUpdateArgs) {
    try {
      const response: any = await this.prisma.attentionSheetDetail.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.AttentionSheetDetailDeleteArgs) {
    try {
      const response: any = await this.prisma.attentionSheetDetail.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}

