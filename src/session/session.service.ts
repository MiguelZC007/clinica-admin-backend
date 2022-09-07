import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  public session_include: Prisma.SessionInclude = {
    user: {
      include: {
        user_rol: {
          include: {
            rol: true,
          },
        },
      },
    },
  };

  public session_select: Prisma.SessionSelect = {
    id: true,
    state: true,
    token: true,
    expire_in: true,
    user_id: true,
    createdAt: true,
    updatedAt: true,
  };
  async create(params: Prisma.SessionCreateArgs) {
    try {
      const response = await this.prisma.session.create(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.SessionFindManyArgs) {
    try {
      const response = await this.prisma.session.findMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.SessionFindUniqueArgs) {
    try {
      const response = await this.prisma.session.findUnique(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.SessionFindFirstArgs) {
    try {
      const response = await this.prisma.session.findFirst(params);
      if (response === null) {
        throw new NotFoundException({ message: 'No se encontró el registro' });
      }
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.SessionUpdateArgs) {
    try {
      const response = await this.prisma.session.update(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
  async updateMany(params: Prisma.SessionUpdateManyArgs) {
    try {
      const response = await this.prisma.session.updateMany(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.SessionDeleteArgs) {
    try {
      const response = await this.prisma.session.delete(params);
      return response;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
