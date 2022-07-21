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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RolGuard } from 'src/guards/rol.guard';

@ApiTags('Session')
@UseGuards(JwtAuthGuard, RolGuard)
@Roles('ADMIN')
@ApiBearerAuth()
@Controller({ version: '1', path: 'session' })
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() data: CreateSessionDto) {
    let params: Prisma.SessionCreateArgs = {
      data: data as Prisma.SessionUncheckedCreateInput,
    };
    return this.sessionService.create(params);
  }

  @Get()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    let params: Prisma.SessionFindManyArgs = {
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
    return this.sessionService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let params: Prisma.SessionFindUniqueArgs = {
      where: { id: id },
    };
    return this.sessionService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateSessionDto) {
    let params: Prisma.SessionUpdateArgs = {
      where: { id: id },
      data: data as Prisma.SessionUncheckedUpdateInput,
    };
    return this.sessionService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    let params: Prisma.SessionDeleteArgs = {
      where: { id: id },
    };
    return this.sessionService.delete(params);
  }
}
