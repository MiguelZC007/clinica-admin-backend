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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';
import { AttentionSheetDetailService } from './attention-sheet-detail.service';
import { CreateAttentionSheetDetailDto } from './dto/create-attention-sheet-detail.dto';
import { UpdateAttentionSheetDetailDto } from './dto/update-attention-sheet-detail.dto';

@ApiTags('Hoja de Atencion Detalle - Reporte Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'attention-sheet-detail' })
export class AttentionSheetDetailController {
  constructor(
    private readonly attentionSheetDetailService: AttentionSheetDetailService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateAttentionSheetDetailDto) {
    const params: Prisma.AttentionSheetDetailCreateArgs = {
      data: data as Prisma.AttentionSheetDetailUncheckedCreateInput,
    };
    return this.attentionSheetDetailService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.AttentionSheetDetailFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.attentionSheetDetailService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.AttentionSheetDetailFindUniqueArgs = {
      where: { id: id },
    };
    return this.attentionSheetDetailService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateAttentionSheetDetailDto) {
    const params: Prisma.AttentionSheetDetailUpdateArgs = {
      where: { id: id },
      data: data as Prisma.AttentionSheetDetailUncheckedUpdateInput,
    };
    return this.attentionSheetDetailService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.AttentionSheetDetailDeleteArgs = {
      where: { id: id },
    };
    return this.attentionSheetDetailService.delete(params);
  }
}

