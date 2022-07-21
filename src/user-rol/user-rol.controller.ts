import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { UpdateUserRolDto } from './dto/update-user-rol.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('User Rol')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'user-rol' })
export class UserRolController {
  constructor(private readonly userRolService: UserRolService) {}

  @Post()
  create(@Body() data: CreateUserRolDto) {
    let params: Prisma.UserRolCreateArgs = {
      data: data as Prisma.UserRolUncheckedCreateInput,
    };
    return this.userRolService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.UserRolFindManyArgs = {
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
    return this.userRolService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.UserRolFindUniqueArgs = {
      where: { id: id },
    };
    return this.userRolService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserRolDto) {
    let params: Prisma.UserRolUpdateArgs = {
      where: { id: id },
      data: data as Prisma.UserRolUncheckedUpdateInput,
    };
    return this.userRolService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.UserRolDeleteArgs = {
      where: { id: id },
    };
    return this.userRolService.delete(params);
  }
}
