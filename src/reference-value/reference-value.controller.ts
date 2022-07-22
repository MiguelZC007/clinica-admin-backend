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
import { ReferenceValueService } from './reference-value.service';
import { CreateReferenceValueDto } from './dto/create-reference-value.dto';
import { UpdateReferenceValueDto } from './dto/update-reference-value.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Reference Value')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'reference-value' })
export class ReferenceValueController {
  constructor(private readonly referenceValueService: ReferenceValueService) {}

  @Post()
  create(@Body() data: CreateReferenceValueDto) {
    let params: Prisma.ReferenceValueCreateArgs = {
      data: data as Prisma.ReferenceValueUncheckedCreateInput,
    };
    return this.referenceValueService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.ReferenceValueFindManyArgs = {
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
    return this.referenceValueService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.ReferenceValueFindUniqueArgs = {
      where: { id: id },
    };
    return this.referenceValueService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateReferenceValueDto) {
    let params: Prisma.ReferenceValueUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ReferenceValueUncheckedUpdateInput,
    };
    return this.referenceValueService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.ReferenceValueDeleteArgs = {
      where: { id: id },
    };
    return this.referenceValueService.delete(params);
  }
}
