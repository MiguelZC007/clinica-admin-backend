import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Auth } from 'src/decorators/auth.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { RolGuard } from 'src/guards/rol.guard';
import { AnalysisService } from './analysis.service';
import { CreateAnalysisDto } from './dto/create-analysis.dto';
import { UpdateAnalysisDto } from './dto/update-analysis.dto';

@ApiTags('Analysis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'analysis' })
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateAnalysisDto) {
    let params: Prisma.AnalysisCreateArgs = {
      data: data as Prisma.AnalysisUncheckedCreateInput,
    };
    return this.analysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.AnalysisFindManyArgs = {
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
    return this.analysisService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    let params: Prisma.AnalysisFindUniqueArgs = {
      where: { id: id },
    };
    return this.analysisService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateAnalysisDto) {
    let params: Prisma.AnalysisUpdateArgs = {
      where: { id: id },
      data: data as Prisma.AnalysisUncheckedUpdateInput,
    };
    return this.analysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    let params: Prisma.AnalysisDeleteArgs = {
      where: { id: id },
    };
    return this.analysisService.delete(params);
  }
}
