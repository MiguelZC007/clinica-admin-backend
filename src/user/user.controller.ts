import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { RolService } from 'src/rol/rol.service';

@ApiTags('User')
@ApiBearerAuth()
@Controller({ version: '1', path: 'user' })
export class UserController {
  constructor(
    private readonly userService: UserService,
    private rolService: RolService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateUserDto) {
    if (data.password) {
      data.password = hashSync(data.password, Number(process.env.SALT_ROUND));
    }
    const params: Prisma.UserCreateArgs = {
      data: data as Prisma.UserUncheckedCreateInput,
    };
    return this.userService.create(params);
  }

  @Get('search')
  @Auth('ADMIN')
  @ApiOperation({
    summary: 'Obtener todos los usuarios que coincidan con la busqueda',
  })
  async findSearch(
    @Query('text') txt: string,
    @Query('rol') rol: string = 'PACIENTE',
  ): Promise<User[]> {
    let result: any[] = [];

    const params: Prisma.UserFindManyArgs = {
      where: {
        user_rol: {
          some: {
            rol: {
              name: {
                contains: rol.trimEnd(),
                mode: 'insensitive',
              },
            },
          },
        },
      },
      orderBy: [
        {
          name: 'asc',
        },
        {
          ci: 'asc',
        },
      ],
      include: {
        user_rol: {
          include: {
            rol: true,
          },
        },
      },
    };
    if (txt != '') {
      const ci = txt.replace(/\D/g, '');
      let search = txt.replace(ci, '');
      search = search.trimStart();
      search = search.trimEnd();

      if (search != '' && ci != '') {
        params.where.OR = [
          {
            search: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            ci: {
              contains: ci.trimEnd(),
              mode: 'insensitive',
            },
          },
        ];
      } else if (ci != '') {
        params.where.OR = {
          ci: {
            contains: ci.trimEnd(),
            mode: 'insensitive',
          },
        };
      } else if (search != '') {
        params.where.OR = {
          search: {
            contains: search,
            mode: 'insensitive',
          },
        };
      }
      result = await this.userService.findMany(params);
    }
    return result;
  }

  @Get()
  @Auth('ADMIN')
  findAll(
    @Query('take') take: number = 0,
    @Query('page') p: number = 0,
    @Query('rol') rol: string = '',
  ) {
    const params: Prisma.UserFindManyArgs = {
      select: this.userService.user_public_select,
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (rol != '') {
      params.where = {
        user_rol: {
          some: {
            rol: {
              name: rol.toUpperCase(),
            },
          },
        },
      };
    }
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.userService.findMany(params);
  }

  @Get('employees')
  @Auth('ADMIN')
  async findAllPatients(
    @Query('take') take: number = 0,
    @Query('page') p: number = 0,
  ) {
    const roles = await this.rolService.findMany({
      where: { NOT: { name: 'PACIENTE' } },
    });
    const or = [];
    roles.forEach((rol) => {
      or.push({
        user_rol: {
          some: {
            rol: {
              name: rol.name,
            },
          },
        },
      });
    });
    const params: Prisma.UserFindManyArgs = {
      where: {
        OR: or,
      },
      select: this.userService.user_public_select,
      orderBy: {
        name: 'asc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.userService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.UserFindUniqueArgs = {
      where: { id: id },
    };
    return this.userService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    if (data.password) {
      data.password = hashSync(data.password, Number(process.env.SALT_ROUND));
    }
    const params: Prisma.UserUpdateArgs = {
      where: { id: id },
      data: data as Prisma.UserUncheckedUpdateInput,
    };
    return this.userService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.UserDeleteArgs = {
      where: { id: id },
    };
    return this.userService.delete(params);
  }
}
