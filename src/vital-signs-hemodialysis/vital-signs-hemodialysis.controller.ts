import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { VitalSignsHemodialysisService } from './vital-signs-hemodialysis.service';
import { CreateVitalSignsHemodialysiDto } from './dto/create-vital-signs-hemodialysi.dto';
import { UpdateVitalSignsHemodialysiDto } from './dto/update-vital-signs-hemodialysi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Signos vitales hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'vital-signs-hemodialysis' })
export class VitalSignsHemodialysisController {
  constructor(
    private readonly vitalSignsHemodialysisService: VitalSignsHemodialysisService,
  ) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateVitalSignsHemodialysiDto, @Req() req: any) {
    const user: any = req.user;
    const params: Prisma.VitalSignsHemodialysisCreateArgs = {
      data: {
        ...data,
        user_created_id: user.id,
      } as Prisma.VitalSignsHemodialysisUncheckedCreateInput,
    };
    return this.vitalSignsHemodialysisService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.VitalSignsHemodialysisFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.vitalSignsHemodialysisService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.VitalSignsHemodialysisFindUniqueArgs = {
      where: { id: id },
    };
    return this.vitalSignsHemodialysisService.findUnique(params);
  }

  @Get('hemodialysis-session/:hemodialysis_session_id')
  @Auth('ADMIN')
  findHemodialysisSession(
    @Param('hemodialysis_session_id') hemodialysis_session_id: string,
  ) {
    const params: Prisma.VitalSignsHemodialysisFindManyArgs = {
      where: { hemodialysis_session_id: hemodialysis_session_id },
    };
    return this.vitalSignsHemodialysisService.findMany(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateVitalSignsHemodialysiDto,
  ) {
    const params: Prisma.VitalSignsHemodialysisUpdateArgs = {
      where: { id: id },
      data: data as Prisma.VitalSignsHemodialysisUncheckedUpdateInput,
    };
    return this.vitalSignsHemodialysisService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.VitalSignsHemodialysisDeleteArgs = {
      where: { id: id },
    };
    return this.vitalSignsHemodialysisService.delete(params);
  }
}

