import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorSpecialtyService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.DoctorSpecialtyCreateArgs) {
    try {
      const response: any = await this.prisma.doctorSpecialty.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.DoctorSpecialtyFindManyArgs) {
    try {
      const response: any = await this.prisma.doctorSpecialty.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.DoctorSpecialtyFindUniqueArgs) {
    try {
      const response: any = await this.prisma.doctorSpecialty.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.DoctorSpecialtyUpdateArgs) {
    try {
      const response: any = await this.prisma.doctorSpecialty.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.DoctorSpecialtyDeleteArgs) {
    try {
      const response: any = await this.prisma.doctorSpecialty.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
