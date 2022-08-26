import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { CategoryAnalysisService } from './category-analysis.service';
import { CreateCategoryAnalysisDto } from './dto/create-category-analysis.dto';
import { UpdateCategoryAnalysisDto } from './dto/update-category-analysis.dto';

@ApiTags('Category Analysis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'category-analysis' })
export class CategoryAnalysisController {
  constructor(
    private readonly categoryAnalysisService: CategoryAnalysisService,
  ) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateCategoryAnalysisDto) {
    const params: Prisma.CategoryAnalysisCreateArgs = {
      data: data as Prisma.CategoryAnalysisUncheckedCreateInput,
    };
    return this.categoryAnalysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.CategoryAnalysisFindManyArgs = {
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
    return this.categoryAnalysisService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.CategoryAnalysisFindUniqueArgs = {
      where: { id: id },
    };
    return this.categoryAnalysisService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateCategoryAnalysisDto) {
    const params: Prisma.CategoryAnalysisUpdateArgs = {
      where: { id: id },
      data: data as Prisma.CategoryAnalysisUncheckedUpdateInput,
    };
    return this.categoryAnalysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.CategoryAnalysisDeleteArgs = {
      where: { id: id },
    };
    return this.categoryAnalysisService.delete(params);
  }
}
