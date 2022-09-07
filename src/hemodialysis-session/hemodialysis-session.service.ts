import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HemodialysisSessionService {
  constructor(private prisma: PrismaService) {}

  public hemodialysis_session_include: Prisma.HemodialysisSessionInclude = {
    hemodialysis: {
      include: {
        patient: true,
      },
    },
    vital_signs_hemodialysis: true,
  };

  async create(params: Prisma.HemodialysisSessionCreateArgs) {
    try {
      const response: any = await this.prisma.hemodialysisSession.create(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.HemodialysisSessionFindManyArgs) {
    try {
      const response: any = await this.prisma.hemodialysisSession.findMany(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.HemodialysisSessionFindUniqueArgs) {
    try {
      const response: any = await this.prisma.hemodialysisSession.findUnique(
        params,
      );
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.HemodialysisSessionUpdateArgs) {
    try {
      const response: any = await this.prisma.hemodialysisSession.update(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.HemodialysisSessionDeleteArgs) {
    try {
      const response: any = await this.prisma.hemodialysisSession.delete(
        params,
      );
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
