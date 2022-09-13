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
import { PharmaceuticalFormService } from './pharmaceutical-form.service';
import { CreatePharmaceuticalFormDto } from './dto/create-pharmaceutical-form.dto';
import { UpdatePharmaceuticalFormDto } from './dto/update-pharmaceutical-form.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Presentacion del Medicamento')
@ApiBearerAuth()
@Controller({ version: '1', path: 'pharmaceutical-form' })
export class PharmaceuticalFormController {
  constructor(
    private readonly pharmaceuticalFormService: PharmaceuticalFormService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePharmaceuticalFormDto) {
    const params: Prisma.PharmaceuticalFormCreateArgs = {
      data: data as Prisma.PharmaceuticalFormUncheckedCreateInput,
    };
    return this.pharmaceuticalFormService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.PharmaceuticalFormFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.pharmaceuticalFormService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PharmaceuticalFormFindUniqueArgs = {
      where: { id: id },
    };
    return this.pharmaceuticalFormService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdatePharmaceuticalFormDto) {
    const params: Prisma.PharmaceuticalFormUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PharmaceuticalFormUncheckedUpdateInput,
    };
    return this.pharmaceuticalFormService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PharmaceuticalFormDeleteArgs = {
      where: { id: id },
    };
    return this.pharmaceuticalFormService.delete(params);
  }
}

