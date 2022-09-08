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
import { HemodialysisService } from './hemodialysis.service';
import { CreateHemodialysisDto } from './dto/create-hemodialysis.dto';
import { UpdateHemodialysisDto } from './dto/update-hemodialysis.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { HemodialysisSessionService } from 'src/hemodialysis-session/hemodialysis-session.service';
import * as moment from 'moment';

@ApiTags('Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'hemodialysis' })
export class HemodialysisController {
  constructor(
    private hemodialysisService: HemodialysisService,
    private hemodialysisSessionService: HemodialysisSessionService,
  ) {}

  @Get('patient/:patient_id')
  findPatient(@Param('patient_id') patient_id: string) {
    const params: Prisma.HemodialysisFindUniqueArgs = {
      where: { patient_id: patient_id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.findUnique(params);
  }

  @Post('hemodialysis-sessions/:patient_id')
  @Auth('ADMIN')
  async createMany(
    @Param('patient_id') patient_id: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    const hemodialysis = await this.hemodialysisService.findUnique({
      where: { patient_id: patient_id },
      include: {
        hemodialysis_machine: {
          include: {
            turn_machine: {
              include: {
                machine: true,
                turn: true,
              },
            },
          },
        },
      },
    });
    if (hemodialysis?.hemodialysis_machine != null) {
      const { hemodialysis_machine } = hemodialysis;
      const { turn_machine } = hemodialysis_machine;
      const { turn, machine } = turn_machine;
      const sessions_dto: Prisma.HemodialysisSessionUncheckedCreateInput[] = [];
      let d = from;
      let n = 1;
      while (moment(d).isBetween(from, to)) {
        if (turn.days.filter((item) => item == moment(d).day()).length > 0) {
          const r: Prisma.HemodialysisSessionUncheckedCreateInput = {
            check_in: turn.check_in,
            check_out: turn.check_out,
            number_machine: machine.number_machine,
            number_session: `${n}`,
            date: d,
            vascular_access: hemodialysis.vascular_access,
            hemodialysis_id: hemodialysis.id,
            dry_weight: 0,
            income_weight: 0,
            egress_weight: 0,
            ultrafiltration_session: '',
            ultrafiltration_end: '',
            filter_type: '',
            filter_reuse: '',
            line_reuse: '',
            heparin: '',
            ktv: '',
            ingest: '',
            oxygenation: 0,
            pa_entry: '',
            nursing_evaluation: null,
            clinic_evaluation: null,
            treatment: null,
            type_hemodialysis: 'CONVENIO',
          };
          sessions_dto.push(r);
        }
        d = moment(d).add(1, 'day').toISOString();
        n++;
      }
      if (sessions_dto.length > 0) {
        await this.hemodialysisSessionService.createMany({
          data: sessions_dto,
        } as Prisma.HemodialysisSessionCreateManyArgs);
      }
      return this.hemodialysisSessionService.findMany({
        where: {
          hemodialysis: {
            patient_id: patient_id,
          },
          date: {
            gte: from,
            lte: to,
          },
        },
        orderBy: {
          number_session: 'asc',
        },
      });
    } else {
      throw new Error('No se ha asignado una máquina al paciente');
    }
  }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateHemodialysisDto) {
    const params: Prisma.HemodialysisCreateArgs = {
      data: data as Prisma.HemodialysisUncheckedCreateInput,
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.HemodialysisFindManyArgs = {
      include: this.hemodialysisService.hemodialysis_include,
      orderBy: {
        patient: {
          name: 'asc',
        },
      },
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.hemodialysisService.findMany(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const params: Prisma.HemodialysisFindUniqueArgs = {
      where: { id: id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateHemodialysisDto) {
    const params: Prisma.HemodialysisUpdateArgs = {
      where: {
        id: id,
      },
      data: data as Prisma.HemodialysisUncheckedUpdateInput,
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.HemodialysisDeleteArgs = {
      where: { id: id },
      include: this.hemodialysisService.hemodialysis_include,
    };
    return this.hemodialysisService.delete(params);
  }
}
