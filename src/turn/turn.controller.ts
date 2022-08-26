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
import { TurnService } from './turn.service';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';

@ApiTags('Turno de hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'turn' })
export class TurnController {
  constructor(private readonly turnService: TurnService) {}

  @Post()
  @Auth()
  create(@Body() data: CreateTurnDto) {
    const params: Prisma.TurnCreateArgs = {
      data: data as Prisma.TurnUncheckedCreateInput,
      include: this.turnService.turn_include,
    };
    return this.turnService.create(params);
  }

  @Get()
  @Auth()
  findAll(@Query('take') take = 0, @Query('page') p = 0) {
    const params: Prisma.TurnFindManyArgs = {
      include: this.turnService.turn_include,
      orderBy: {
        name: 'asc',
      },
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.turnService.findMany(params);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    const params: Prisma.TurnFindUniqueArgs = {
      where: { id: id },
      include: this.turnService.turn_include,
    };
    return this.turnService.findUnique(params);
  }

  @Put(':id')
  @Auth()
  update(@Param('id') id: string, @Body() data: UpdateTurnDto) {
    const params: Prisma.TurnUpdateArgs = {
      where: { id: id },
      data: data as Prisma.TurnUncheckedUpdateInput,
      include: this.turnService.turn_include,
    };
    return this.turnService.update(params);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    const params: Prisma.TurnDeleteArgs = {
      where: { id: id },
      include: this.turnService.turn_include,
    };
    return this.turnService.delete(params);
  }
}
