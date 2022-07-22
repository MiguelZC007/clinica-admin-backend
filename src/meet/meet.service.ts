import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MeetService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  public meet_select: Prisma.MeetSelect = {
    id: true,
    from: true,
    to: true,
    state: true,
    reminder: true,
    patient_id: true,
    doctor_id: true,
    specialty_id: true,
    createdAt: true,
    updatedAt: true,
    patient: {
      select: this.userService.user_public_select,
    },
    doctor: {
      select: this.userService.user_public_select,
    },
  };

  async create(params: Prisma.MeetCreateArgs) {
    try {
      let data = await this.prisma.meet.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.MeetFindManyArgs) {
    try {
      let data = await this.prisma.meet.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.MeetFindUniqueArgs) {
    try {
      let data = await this.prisma.meet.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.MeetFindFirstArgs) {
    try {
      let data = await this.prisma.meet.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.MeetUpdateArgs) {
    try {
      let data = await this.prisma.meet.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.MeetUpdateManyArgs) {
    try {
      let data = await this.prisma.meet.updateMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.MeetDeleteArgs) {
    try {
      let data = await this.prisma.meet.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
