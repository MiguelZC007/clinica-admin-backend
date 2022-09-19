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
import { RecipeReceiptMedicineService } from './recipe-receipt-medicine.service';
import { CreateRecipeReceiptMedicineDto } from './dto/create-recipe-receipt-medicine.dto';
import { UpdateRecipeReceiptMedicineDto } from './dto/update-recipe-receipt-medicine.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Medicamentos del Recibo Recetario')
@ApiBearerAuth()
@Controller({ version: '1', path: 'recipe-receipt-medicine' })
export class RecipeReceiptMedicineController {
  constructor(
    private readonly recipeReceiptMedicineService: RecipeReceiptMedicineService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateRecipeReceiptMedicineDto) {
    const params: Prisma.RecipeReceiptMedicineCreateArgs = {
      data: data as Prisma.RecipeReceiptMedicineUncheckedCreateInput,
    };
    return this.recipeReceiptMedicineService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.RecipeReceiptMedicineFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.recipeReceiptMedicineService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.RecipeReceiptMedicineFindUniqueArgs = {
      where: { id: id },
    };
    return this.recipeReceiptMedicineService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateRecipeReceiptMedicineDto,
  ) {
    const params: Prisma.RecipeReceiptMedicineUpdateArgs = {
      where: { id: id },
      data: data as Prisma.RecipeReceiptMedicineUncheckedUpdateInput,
    };
    return this.recipeReceiptMedicineService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.RecipeReceiptMedicineDeleteArgs = {
      where: { id: id },
    };
    return this.recipeReceiptMedicineService.delete(params);
  }
}

