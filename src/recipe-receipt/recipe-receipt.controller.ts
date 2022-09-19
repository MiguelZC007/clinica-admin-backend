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
import { RecipeReceiptService } from './recipe-receipt.service';
import { CreateRecipeReceiptDto } from './dto/create-recipe-receipt.dto';
import { UpdateRecipeReceiptDto } from './dto/update-recipe-receipt.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Recibo Recetario')
@ApiBearerAuth()
@Controller({ version: '1', path: 'recipe-receipt' })
export class RecipeReceiptController {
  constructor(private readonly recipeReceiptService: RecipeReceiptService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateRecipeReceiptDto) {
    const params: Prisma.RecipeReceiptCreateArgs = {
      data: data as Prisma.RecipeReceiptUncheckedCreateInput,
    };
    return this.recipeReceiptService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.RecipeReceiptFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.recipeReceiptService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.RecipeReceiptFindUniqueArgs = {
      where: { id: id },
    };
    return this.recipeReceiptService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateRecipeReceiptDto) {
    const params: Prisma.RecipeReceiptUpdateArgs = {
      where: { id: id },
      data: data as Prisma.RecipeReceiptUncheckedUpdateInput,
    };
    return this.recipeReceiptService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.RecipeReceiptDeleteArgs = {
      where: { id: id },
    };
    return this.recipeReceiptService.delete(params);
  }
}

