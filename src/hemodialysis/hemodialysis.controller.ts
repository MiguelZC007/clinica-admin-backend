import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { HemodialysisService } from './hemodialysis.service';
import { CreateHemodialysisDto } from './dto/create-hemodialysis.dto';
import { UpdateHemodialysisDto } from './dto/update-hemodialysis.dto';
import { Prisma, Product } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { HemodialysisSessionService } from 'src/hemodialysis-session/hemodialysis-session.service';
import * as moment from 'moment';
import { ErrorsManager } from 'src/errors-manager';
import { ProductService } from 'src/product/product.service';

@ApiTags('Paciente de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'hemodialysis' })
export class HemodialysisController {
  constructor(
    private hemodialysisService: HemodialysisService,
    private hemodialysisSessionService: HemodialysisSessionService,
    private productService: ProductService,
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
    @Req() req: any,
  ) {
    const user = req.user;
    try {
      const sessions_dto: Prisma.HemodialysisSessionCreateInput[] = [];
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
        let d = from;
        let n = 1;
        const vitalSings = [];
        for (let index = 0; index < 4; index++) {
          vitalSings.push({
            user_created_id: user.id,
            blood_flow: 0,
            conductivity: 0,
            fc: 0,
            hour: index + 1,
            pa: '0/0',
            ptm: 0,
            pv: 0,
            temp: 0,
          });
        }
        while (moment(d).isBetween(from, to, undefined, '[]')) {
          if (turn.days.filter((item) => item == moment(d).day()).length > 0) {
            const product: Product = await this.productService.findUnique({
              where: {
                name: 'Sesion de Hemodialisis Convenio',
              },
            });
            if (product === null) {
              throw new BadRequestException({
                message:
                  'El producto < Sesion de Hemodialisis Convenio > no existe',
              });
            }
            const r: Prisma.HemodialysisSessionCreateInput = {
              check_in: turn.check_in,
              check_out: turn.check_out,
              number_machine: machine.number_machine,
              number_session: n,
              date: d,
              vascular_access: hemodialysis.vascular_access,
              hemodialysis: {
                connect: {
                  id: hemodialysis.id,
                },
              },
              sale: {
                create: {
                  cashier_id: user.id,
                  patient_id: patient_id,
                  total_price: product.price,
                  transfer: 0,
                  state: 'CONVENIO',
                  sale_detail: {
                    create: {
                      product_id: product.id,
                      quantity: 1,
                      sale_price: product.price,
                      discount: 0,
                      name: product.name,
                      createdAt: d,
                      updatedAt: d,
                    },
                  },
                },
              } as Prisma.SaleCreateNestedOneWithoutHemodialysis_sessionInput,
              type_hemodialysis: 'CONVENIO',
              devol: 0,
              ultrafiltration_session: 0,
              ultrafiltration_end: 0,
              filter_reuse: 0,
              line_reuse: 0,
              heparin: 0,
              ktv: 0,
              oxygenation: 0,
              pa_entry: '0/0',
              vital_signs_hemodialysis: {
                createMany: {
                  data: vitalSings,
                } as Prisma.VitalSignsHemodialysisCreateManyHemodialysis_sessionInputEnvelope,
              },
            };
            sessions_dto.push(r);
            n++;
          }
          d = moment(d).add(1, 'day').toISOString();
        }
        if (sessions_dto.length > 0) {
          for (const item of sessions_dto) {
            await this.hemodialysisSessionService.create({
              data: item as Prisma.HemodialysisSessionCreateInput,
            });
          }
        }
      } else {
        throw new BadRequestException({
          message:
            'El paciente no tiene asignado ningun turno, o no es paciente de Hemodialisis',
        });
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
          date: 'asc',
        },
      });
    } catch (e) {
      ErrorsManager(e);
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
