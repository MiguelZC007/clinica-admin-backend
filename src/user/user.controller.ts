import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { compareSync, hashSync } from 'bcrypt';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('User')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'user' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    if (data.password) {
      data.password = hashSync(data.password, process.env.SALT_ROUND);
    }
    let params: Prisma.UserCreateArgs = {
      data: data as Prisma.UserUncheckedCreateInput,
    };
    return this.userService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.UserFindManyArgs = {
      select: this.userService.user_public_select,
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      let skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.userService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.UserFindUniqueArgs = {
      where: { id: id },
    };
    return this.userService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    if (data.password) {
      data.password = hashSync(data.password, process.env.SALT_ROUND);
    }
    let params: Prisma.UserUpdateArgs = {
      where: { id: id },
      data: data as Prisma.UserUncheckedUpdateInput,
    };
    return this.userService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.UserDeleteArgs = {
      where: { id: id },
    };
    return this.userService.delete(params);
  }
}
