import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  public user_select: Prisma.UserSelect = {
    id: true,
    name: true,
    lastname: true,
    mother_lastname: true,
    search: true,
    birthdate: true,
    cellphone: true,
    ci: true,
    gender: true,
    address: true,
    zone: true,
    state: true,
    city: true,
    country: true,
    email: true,
    password: true,
    contact_name: true,
    contact_phone: true,
    relationship: true,
    odoo_user_id: true,
    registration_age: true,
    observations: true,
    about_us: true,
    is_black: true,
    hemodialysis: true,
    createdAt: true,
    updatedAt: true,
    active: true,
    user_rol: {
      include: {
        rol: true,
      },
    },
  };

  public user_public_select: Prisma.UserSelect = {
    id: true,
    name: true,
    lastname: true,
    mother_lastname: true,
    search: false,
    birthdate: true,
    cellphone: true,
    ci: true,
    gender: true,
    address: true,
    zone: true,
    state: true,
    city: true,
    country: true,
    email: true,
    password: false,
    contact_name: true,
    contact_phone: true,
    relationship: true,
    odoo_user_id: false,
    registration_age: true,
    observations: true,
    about_us: true,
    is_black: true,
    hemodialysis: true,
    createdAt: true,
    updatedAt: true,
    active: true,
    user_rol: {
      include: {
        rol: true,
      },
    },
  };

  async create(params: Prisma.UserCreateArgs) {
    try {
      let search = `${params.data.name || ''} ${params.data.lastname || ''} ${params.data.mother_lastname || ''
        }`;
      search = search.trimEnd();
      params.data.search = search.toLocaleLowerCase();
      const data = await this.prisma.user.create(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findMany(params: Prisma.UserFindManyArgs) {
    try {
      const data = await this.prisma.user.findMany(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findUnique(params: Prisma.UserFindUniqueArgs) {
    try {
      const data = await this.prisma.user.findUnique(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async findFirst(params: Prisma.UserFindFirstArgs) {
    try {
      const data = await this.prisma.user.findFirst(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async update(params: Prisma.UserUpdateArgs) {
    try {
      let search = `${params.data.name || ''} ${params.data.lastname || ''} ${params.data.mother_lastname || ''
        }`;
      search = search.trimEnd();
      params.data.search = search.toLocaleLowerCase();
      const data = await this.prisma.user.update(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }

  async delete(params: Prisma.UserDeleteArgs) {
    try {
      const data = await this.prisma.user.delete(params);
      return data;
    } catch (error) {
      ErrorsManager(error);
    }
  }
}
