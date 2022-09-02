import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { TemplateProductService } from './template-product.service';
import { CreateTemplateProductDto } from './dto/create-template-product.dto';
import { UpdateTemplateProductDto } from './dto/update-template-product.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos asignados a un Template')
@ApiBearerAuth()
@Controller({ version: '1', path: 'template-product' })
export class TemplateProductController {
  constructor(private readonly templateProductService: TemplateProductService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateTemplateProductDto) {
    const params: Prisma.TemplateProductCreateArgs = {
      data: data as Prisma.TemplateProductUncheckedCreateInput,
    };
    return this.templateProductService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.TemplateProductFindManyArgs = {

    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.templateProductService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.TemplateProductFindUniqueArgs = {
      where: { id: id }
    };
    return this.templateProductService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateTemplateProductDto,
  ) {
    const params: Prisma.TemplateProductUpdateArgs = {
      where: { id: id },
      data: data as Prisma.TemplateProductUncheckedUpdateInput,
    };
    return this.templateProductService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.TemplateProductDeleteArgs = {
      where: { id: id }
    };
    return this.templateProductService.delete(params);
  }
}
