import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Session')
@ApiBearerAuth()
@Controller({ version: '1', path: 'session' })
export class SessionController {
  constructor(private readonly sessionService: SessionService) { }

  @Post()
  @Auth('ADMIN')
  create(@Body() data: CreateSessionDto) {
    const params: Prisma.SessionCreateArgs = {
      data: data as Prisma.SessionUncheckedCreateInput,
    };
    return this.sessionService.create(params);
  }

  @Get()
  @Auth('ADMIN')
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.SessionFindManyArgs = {
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
    return this.sessionService.findMany(params);
  }

  @Get(':id')
  @Auth('ADMIN')
  findOne(@Param('id') id: string) {
    const params: Prisma.SessionFindUniqueArgs = {
      where: { id: id },
    };
    return this.sessionService.findUnique(params);
  }

  @Put(':id')
  @Auth('ADMIN')
  update(@Param('id') id: string, @Body() data: UpdateSessionDto) {
    const params: Prisma.SessionUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SessionUncheckedUpdateInput,
    };
    return this.sessionService.update(params);
  }

  @Delete(':id')
  @Auth('ADMIN')
  remove(@Param('id') id: string) {
    const params: Prisma.SessionDeleteArgs = {
      where: { id: id },
    };
    return this.sessionService.delete(params);
  }
}
