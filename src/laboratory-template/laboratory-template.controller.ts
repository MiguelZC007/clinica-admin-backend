import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { LaboratoryTemplateService } from './laboratory-template.service';
import { CreateLaboratoryTemplateDto } from './dto/create-laboratory-template.dto';
import { UpdateLaboratoryTemplateDto } from './dto/update-laboratory-template.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Templates de Laboratorios')
@ApiBearerAuth()
@Controller({ version: '1', path: 'laboratory-template' })
export class LaboratoryTemplateController {
  constructor(private readonly laboratoryTemplateService: LaboratoryTemplateService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateLaboratoryTemplateDto) {
    const params: Prisma.LaboratoryTemplateCreateArgs = {
      data: data as Prisma.LaboratoryTemplateUncheckedCreateInput,
    };
    return this.laboratoryTemplateService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.LaboratoryTemplateFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.laboratoryTemplateService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.LaboratoryTemplateFindUniqueArgs = {
      where: { id: id }
    };
    return this.laboratoryTemplateService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateLaboratoryTemplateDto,
  ) {
    const params: Prisma.LaboratoryTemplateUpdateArgs = {
      where: { id: id },
      data: data as Prisma.LaboratoryTemplateUncheckedUpdateInput,
    };
    return this.laboratoryTemplateService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.LaboratoryTemplateDeleteArgs = {
      where: { id: id }
    };
    return this.laboratoryTemplateService.delete(params);
  }
}
