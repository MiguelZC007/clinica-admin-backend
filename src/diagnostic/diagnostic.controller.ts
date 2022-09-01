import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { DiagnosticService } from './diagnostic.service';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';

@ApiTags('Diagnosticos')
@ApiBearerAuth()
@Controller({ version: '1', path: 'diagnostic' })
export class DiagnosticController {
  constructor(private readonly diagnosticService: DiagnosticService) { }
  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateDiagnosticDto) {
    const params: Prisma.DiagnosticCreateArgs = {
      data: data as Prisma.DiagnosticUncheckedCreateInput,
    };
    return this.diagnosticService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.DiagnosticFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.diagnosticService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.DiagnosticFindUniqueArgs = {
      where: { id: id }
    };
    return this.diagnosticService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateDiagnosticDto,
  ) {
    const params: Prisma.DiagnosticUpdateArgs = {
      where: { id: id },
      data: data as Prisma.DiagnosticUncheckedUpdateInput,
    };
    return this.diagnosticService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.DiagnosticDeleteArgs = {
      where: { id: id }
    };
    return this.diagnosticService.delete(params);
  }
}
