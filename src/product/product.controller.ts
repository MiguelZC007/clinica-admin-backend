import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Product')
@ApiBearerAuth()
@Controller({ version: '1', path: 'product' })
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateProductDto) {
    const params: Prisma.ProductCreateArgs = {
      data: data as Prisma.ProductUncheckedCreateInput,
    };
    return this.productService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.ProductFindManyArgs = {
      orderBy: [
        {
          category: {
            name: 'asc',
          },
        },
        {
          name: 'asc',
        },
      ],
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.productService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.ProductFindUniqueArgs = {
      where: { id: id },
    };
    return this.productService.findUnique(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  search(@Query('search') search: string) {
    const params: Prisma.ProductFindManyArgs = {
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    };
    return this.productService.findMany(params);
  }

  @Get('category/:category_id')
  @Auth('ADMIN')
  categories(@Param('category_id') category_id: string) {
    const params: Prisma.ProductFindManyArgs = {
      where: { category_id: category_id },
      orderBy: {
        name: 'asc',
      },
    };
    return this.productService.findMany(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateProductDto) {
    const params: Prisma.ProductUpdateArgs = {
      where: { id: id },
      data: data as Prisma.ProductUncheckedUpdateInput,
    };
    return this.productService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.ProductDeleteArgs = {
      where: { id: id },
    };
    return this.productService.delete(params);
  }
}
