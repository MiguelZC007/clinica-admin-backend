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
import { AttentionSheetService } from './attention-sheet.service';
import { CreateAttentionSheetDto } from './dto/create-attention-sheet.dto';
import { UpdateAttentionSheetDto } from './dto/update-attention-sheet.dto';

@ApiTags('Hoja de Atencion - Reporte Hemodialysis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'attention-sheet' })
export class AttentionSheetController {
  constructor(private readonly attentionSheetService: AttentionSheetService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateAttentionSheetDto) {
    const params: Prisma.AttentionSheetCreateArgs = {
      data: data as Prisma.AttentionSheetUncheckedCreateInput,
    };
    return this.attentionSheetService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.AttentionSheetFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.attentionSheetService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.AttentionSheetFindUniqueArgs = {
      where: { id: id },
    };
    return this.attentionSheetService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateAttentionSheetDto) {
    const params: Prisma.AttentionSheetUpdateArgs = {
      where: { id: id },
      data: data as Prisma.AttentionSheetUncheckedUpdateInput,
    };
    return this.attentionSheetService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.AttentionSheetDeleteArgs = {
      where: { id: id },
    };
    return this.attentionSheetService.delete(params);
  }
}

