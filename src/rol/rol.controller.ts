import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller({ version: '1', path: 'rol' })
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateRolDto) {
    const params: Prisma.RolCreateArgs = {
      data: data as Prisma.RolUncheckedCreateInput,
    };
    return this.rolService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.RolFindManyArgs = {
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
    return this.rolService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.RolFindUniqueArgs = {
      where: { id: id },
    };
    return this.rolService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateRolDto) {
    const params: Prisma.RolUpdateArgs = {
      where: { id: id },
      data: data as Prisma.RolUncheckedUpdateInput,
    };
    return this.rolService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.RolDeleteArgs = {
      where: { id: id },
    };
    return this.rolService.delete(params);
  }
}
