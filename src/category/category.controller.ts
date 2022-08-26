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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Category')
@ApiBearerAuth()
@Controller({ version: '1', path: 'category' })
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateCategoryDto) {
    const params: Prisma.CategoryCreateArgs = {
      data: data as Prisma.CategoryUncheckedCreateInput,
    };
    return this.categoryService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.CategoryFindManyArgs = {
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
    return this.categoryService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.CategoryFindUniqueArgs = {
      where: { id: id },
    };
    return this.categoryService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateCategoryDto) {
    const params: Prisma.CategoryUpdateArgs = {
      where: { id: id },
      data: data as Prisma.CategoryUncheckedUpdateInput,
    };
    return this.categoryService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.CategoryDeleteArgs = {
      where: { id: id },
    };
    return this.categoryService.delete(params);
  }
}
