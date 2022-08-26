import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { MeetService } from './meet.service';
import { CreateMeetDto } from './dto/create-meet.dto';
import { UpdateMeetDto } from './dto/update-meet.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Meet')
@ApiBearerAuth()
@Controller({ version: '1', path: 'meet' })
export class MeetController {
  constructor(private readonly meetService: MeetService) {}

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateMeetDto) {
    const params: Prisma.MeetCreateArgs = {
      data: data as Prisma.MeetUncheckedCreateInput,
      select: this.meetService.meet_select,
    };
    return this.meetService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: any = {
      select: this.meetService.meet_select,

      orderBy: {
        createdAt: 'desc',
      },
    };
    if (p > 0 && take > 0) {
      p = +p > 0 ? +p - 1 : 0;
      const skip = +p > 0 ? +p * +take : 0;
      params.take = +take;
      params.skip = +skip;
    }
    return this.meetService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.MeetFindUniqueArgs = {
      where: { id: id },
      select: this.meetService.meet_select,
    };
    return this.meetService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateMeetDto) {
    const params: Prisma.MeetUpdateArgs = {
      where: { id: id },
      data: data as Prisma.MeetUncheckedUpdateInput,
    };
    return this.meetService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.MeetDeleteArgs = {
      where: { id: id },
      select: this.meetService.meet_select,
    };
    return this.meetService.delete(params);
  }
}
