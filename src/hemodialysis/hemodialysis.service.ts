import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HemodialysisService {
  constructor(private prisma: PrismaService) { }

  public hemodialysis_include: Prisma.HemodialysisInclude = {
    files: true,
    patient: true,
    turn: {
      include: {
        turn_machine: {
          include: {
            machine: true,
            turn: true,
          },
        },
      },
    },
    hemodialysis_session: true,
  };

  async create(params: Prisma.HemodialysisCreateArgs) {
    try {
      const response: any = await this.prisma.hemodialysis.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(
    params: Prisma.HemodialysisFindManyArgs = {
      include: this.hemodialysis_include,
    },
  ) {
    try {
      const response: any = await this.prisma.hemodialysis.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.HemodialysisFindUniqueArgs) {
    try {
      const response: any = await this.prisma.hemodialysis.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.HemodialysisUpdateArgs) {
    try {
      const response: any = await this.prisma.hemodialysis.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.HemodialysisDeleteArgs) {
    try {
      const response: any = await this.prisma.hemodialysis.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
