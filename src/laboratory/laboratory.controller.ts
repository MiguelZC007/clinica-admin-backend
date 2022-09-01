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
import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Laboratorios')
@ApiBearerAuth()
@Controller({ version: '1', path: 'laboratory' })
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateLaboratoryDto) {
    const params: Prisma.LaboratoryCreateArgs = {
      data: data as Prisma.LaboratoryUncheckedCreateInput,
    };
    return this.laboratoryService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.LaboratoryFindManyArgs = {
      orderBy: [
        {
          patient: {
            name: 'asc',
          },
        },
        {
          updatedAt: 'desc',
        },
      ],
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.laboratoryService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.LaboratoryFindUniqueArgs = {
      where: { id: id }
    };
    return this.laboratoryService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateLaboratoryDto,
  ) {
    const params: Prisma.LaboratoryUpdateArgs = {
      where: { id: id },
      data: data as Prisma.LaboratoryUncheckedUpdateInput,
    };
    return this.laboratoryService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.LaboratoryDeleteArgs = {
      where: { id: id }
    };
    return this.laboratoryService.delete(params);
  }
}

