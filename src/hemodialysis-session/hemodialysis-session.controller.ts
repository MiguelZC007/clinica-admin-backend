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
import { HemodialysisSessionService } from './hemodialysis-session.service';
import { CreateHemodialysisSessionDto } from './dto/create-hemodialysis-session.dto';
import { UpdateHemodialysisSessionDto } from './dto/update-hemodialysis-session.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Sesiones de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'hemodialysis-session' })
export class HemodialysisSessionController {
  constructor(
    private readonly hemodialysisSessionService: HemodialysisSessionService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateHemodialysisSessionDto) {
    const params: Prisma.HemodialysisSessionCreateArgs = {
      data: data as Prisma.HemodialysisSessionUncheckedCreateInput,
      include: this.hemodialysisSessionService.hemodialysis_session_include,
    };
    return this.hemodialysisSessionService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.HemodialysisSessionFindManyArgs = {
      include: this.hemodialysisSessionService.hemodialysis_session_include,
      orderBy: [
        {
          hemodialysis: {
            history_number: 'asc',
          },
        },
        {
          date: 'asc',
        },
      ],
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.hemodialysisSessionService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.HemodialysisSessionFindUniqueArgs = {
      where: { id: id },
      include: this.hemodialysisSessionService.hemodialysis_session_include,
    };
    return this.hemodialysisSessionService.findUnique(params);
  }

  @Get('patient/:patient_id')
  @Auth('ADMIN')
  findPatient(
    @Param('patient_id') patient_id: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    const params: Prisma.HemodialysisSessionFindManyArgs = {
      where: {
        hemodialysis: {
          patient_id: patient_id,
        },
        date: {
          gte: from,
          lte: to,
        },
      },
      include: this.hemodialysisSessionService.hemodialysis_session_include,
      orderBy: {
        date: 'asc',
      },
    };
    return this.hemodialysisSessionService.findMany(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateHemodialysisSessionDto) {
    const params: Prisma.HemodialysisSessionUpdateArgs = {
      where: { id: id },
      data: data as Prisma.HemodialysisSessionUncheckedUpdateInput,
      include: this.hemodialysisSessionService.hemodialysis_session_include,
    };
    return this.hemodialysisSessionService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.HemodialysisSessionDeleteArgs = {
      where: { id: id },
      include: this.hemodialysisSessionService.hemodialysis_session_include,
    };
    return this.hemodialysisSessionService.delete(params);
  }
}
