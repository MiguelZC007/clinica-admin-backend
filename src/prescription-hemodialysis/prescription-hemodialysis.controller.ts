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
import { PrescriptionHemodialysisService } from './prescription-hemodialysis.service';
import { CreatePrescriptionHemodialysisDto } from './dto/create-prescription-hemodialysis.dto';
import { UpdatePrescriptionHemodialysisDto } from './dto/update-prescription-hemodialysis.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Medicamentos asignados a los pacientes de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'prescription-hemodialysis' })
export class PrescriptionHemodialysisController {
  constructor(
    private readonly prescriptionHemodialysisService: PrescriptionHemodialysisService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreatePrescriptionHemodialysisDto) {
    const params: Prisma.PrescriptionHemodialysisCreateArgs = {
      data: data as Prisma.PrescriptionHemodialysisUncheckedCreateInput,
    };
    return this.prescriptionHemodialysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.PrescriptionHemodialysisFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.prescriptionHemodialysisService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.PrescriptionHemodialysisFindUniqueArgs = {
      where: { id: id },
    };
    return this.prescriptionHemodialysisService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdatePrescriptionHemodialysisDto,
  ) {
    const params: Prisma.PrescriptionHemodialysisUpdateArgs = {
      where: { id: id },
      data: data as Prisma.PrescriptionHemodialysisUncheckedUpdateInput,
    };
    return this.prescriptionHemodialysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.PrescriptionHemodialysisDeleteArgs = {
      where: { id: id },
    };
    return this.prescriptionHemodialysisService.delete(params);
  }
}

