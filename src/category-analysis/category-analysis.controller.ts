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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RolGuard } from 'src/guards/rol.guard';
import { CategoryAnalysisService } from './category-analysis.service';
import { CreateCategoryAnalysisDto } from './dto/create-category-analysis.dto';
import { UpdateCategoryAnalysisDto } from './dto/update-category-analysis.dto';

@ApiTags('Category Analysis')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'category-analysis' })
export class CategoryAnalysisController {
  constructor(
    private readonly categoryAnalysisService: CategoryAnalysisService,
  ) {}

  @Post()
  create(@Body() data: CreateCategoryAnalysisDto) {
    let params: Prisma.CategoryAnalysisCreateArgs = {
      data: data as Prisma.CategoryAnalysisUncheckedCreateInput,
    };
    return this.categoryAnalysisService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.CategoryAnalysisFindManyArgs = {
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
    return this.categoryAnalysisService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.CategoryAnalysisFindUniqueArgs = {
      where: { id: id },
    };
    return this.categoryAnalysisService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateCategoryAnalysisDto) {
    let params: Prisma.CategoryAnalysisUpdateArgs = {
      where: { id: id },
      data: data as Prisma.CategoryAnalysisUncheckedUpdateInput,
    };
    return this.categoryAnalysisService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.CategoryAnalysisDeleteArgs = {
      where: { id: id },
    };
    return this.categoryAnalysisService.delete(params);
  }
}
