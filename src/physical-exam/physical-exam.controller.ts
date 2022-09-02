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
import { PhysicalExamService } from './physical-exam.service';
import { CreatePhysicalExamDto } from './dto/create-physical-exam.dto';
import { UpdatePhysicalExamDto } from './dto/update-physical-exam.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Examenes Fisicos')
@ApiBearerAuth()
@Controller({ version: '1', path: 'physical-exam' })
export class PhysicalExamController {
  constructor(private readonly physicalExamService: PhysicalExamService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePhysicalExamDto) {
    const params: Prisma.PhysicalExamCreateArgs = {
      data: data as Prisma.PhysicalExamUncheckedCreateInput,
    };
    return this.physicalExamService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.PhysicalExamFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.physicalExamService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PhysicalExamFindUniqueArgs = {
      where: { id: id },
    };
    return this.physicalExamService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdatePhysicalExamDto) {
    const params: Prisma.PhysicalExamUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PhysicalExamUncheckedUpdateInput,
    };
    return this.physicalExamService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PhysicalExamDeleteArgs = {
      where: { id: id },
    };
    return this.physicalExamService.delete(params);
  }
}

