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
import { RecordUnderlyingDiseaseService } from './record-underlying-disease.service';
import { CreateRecordUnderlyingDiseaseDto } from './dto/create-record-underlying-disease.dto';
import { UpdateRecordUnderlyingDiseaseDto } from './dto/update-record-underlying-disease.dto';
import { Prisma } from '@prisma/client';
import { Auth } from 'src/decorators/auth.decorator';

@Controller('record-underlying-disease')
export class RecordUnderlyingDiseaseController {
  constructor(
    private readonly recordUnderlyingDiseaseService: RecordUnderlyingDiseaseService,
  ) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateRecordUnderlyingDiseaseDto) {
    const params: Prisma.RecordUnderlyingDiseaseCreateArgs = {
      data: data as Prisma.RecordUnderlyingDiseaseUncheckedCreateInput,
    };
    return this.recordUnderlyingDiseaseService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.RecordUnderlyingDiseaseFindManyArgs = {};
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.recordUnderlyingDiseaseService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.RecordUnderlyingDiseaseFindUniqueArgs = {
      where: { id: id },
    };
    return this.recordUnderlyingDiseaseService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(
    @Param('id') id: string,
    @Body() data: UpdateRecordUnderlyingDiseaseDto,
  ) {
    const params: Prisma.RecordUnderlyingDiseaseUpdateArgs = {
      where: { id: id },
      data: data as Prisma.RecordUnderlyingDiseaseUncheckedUpdateInput,
    };
    return this.recordUnderlyingDiseaseService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.RecordUnderlyingDiseaseDeleteArgs = {
      where: { id: id },
    };
    return this.recordUnderlyingDiseaseService.delete(params);
  }
}

