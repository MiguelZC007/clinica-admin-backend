import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MeetService } from './meet.service';
import { CreateMeetDto } from './dto/create-meet.dto';
import { UpdateMeetDto } from './dto/update-meet.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Meet')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'meet' })
export class MeetController {
  constructor(private readonly meetService: MeetService) {}

  @Post()
  create(@Body() data: CreateMeetDto) {
    let params: Prisma.MeetCreateArgs = {
      data: data as Prisma.MeetUncheckedCreateInput,
      select: this.meetService.meet_select,
    };
    return this.meetService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: any = {
      select: this.meetService.meet_select,

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
    return this.meetService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.MeetFindUniqueArgs = {
      where: { id: id },
      select: this.meetService.meet_select,
    };
    return this.meetService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMeetDto) {
    let params: Prisma.MeetUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MeetUncheckedUpdateInput,
    };
    return this.meetService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.MeetDeleteArgs = {
      where: { id: id },
      select: this.meetService.meet_select,
    };
    return this.meetService.delete(params);
  }
}
