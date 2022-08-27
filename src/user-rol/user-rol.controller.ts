import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { UpdateUserRolDto } from './dto/update-user-rol.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('User Rol')
@ApiBearerAuth()
@Controller({ version: '1', path: 'user-rol' })
export class UserRolController {
  constructor(private readonly userRolService: UserRolService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateUserRolDto) {
    const params: Prisma.UserRolCreateArgs = {
      data: data as Prisma.UserRolUncheckedCreateInput,
    };
    return this.userRolService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.UserRolFindManyArgs = {
      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.userRolService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.UserRolFindUniqueArgs = {
      where: { id: id },
    };
    return this.userRolService.findUnique(params);
  }

  @Get('user/:user_id')
  @Auth('ADMIN')
  user(@Param('user_id') user_id: string) {
    const params: Prisma.UserRolFindManyArgs = {
      where: { user_id: user_id },
      orderBy: {
        updatedAt: "desc"
      }
    };
    return this.userRolService.findMany(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateUserRolDto) {
    const params: Prisma.UserRolUpdateArgs = {
      where: { id: id },
      data: data as Prisma.UserRolUncheckedUpdateInput,
    };
    return this.userRolService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.UserRolDeleteArgs = {
      where: { id: id },
    };
    return this.userRolService.delete(params);
  }
}
