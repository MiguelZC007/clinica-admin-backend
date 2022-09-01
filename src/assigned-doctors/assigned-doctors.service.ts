import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssignedDoctorsService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.AssignedDoctorsCreateArgs) {
    try {
      const response: any = await this.prisma.assignedDoctors.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.AssignedDoctorsFindManyArgs) {
    try {
      const response: any = await this.prisma.assignedDoctors.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.AssignedDoctorsFindUniqueArgs) {
    try {
      const response: any = await this.prisma.assignedDoctors.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.AssignedDoctorsUpdateArgs) {
    try {
      const response: any = await this.prisma.assignedDoctors.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.AssignedDoctorsDeleteArgs) {
    try {
      const response: any = await this.prisma.assignedDoctors.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
