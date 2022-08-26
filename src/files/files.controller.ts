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
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Prisma } from '@prisma/client';

@ApiTags('Archivos de los Pacientes de Hemodialisis')
@ApiBearerAuth()
@Controller({ version: '1', path: 'files' })
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post()
  create(@Body() data: CreateFileDto) {
    const { file, ...rsa } = data;
    const params: Prisma.FilesCreateArgs = {
      data: rsa as Prisma.FilesUncheckedCreateInput,
    };
    return this.filesService.create(params, file);
  }

  @Get()
  @Auth()
  findAll(@Query('take') take: number = 0, @Query('page') p: number = 0) {
    const params: Prisma.FilesFindManyArgs = {
      orderBy: [
        {
          hemodialysis: {
            patient: {
              name: 'asc',
            },
          },
        },
        {
          name: 'asc',
        },
      ],
    };
    if (take > 0 && p > 0) {
      p = p > 0 ? p - 1 : 0;
      const skip = p > 0 ? p * take : 0;
      params.skip = +skip;
      params.take = +take;
    }
    return this.filesService.findMany(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const params: Prisma.FilesFindUniqueArgs = {
      where: { id: id },
    };
    return this.filesService.findUnique(params);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateFileDto) {
    const params: Prisma.FilesUpdateArgs = {
      where: { id: id },
      data: data as Prisma.FilesUncheckedUpdateInput,
    };
    return this.filesService.update(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const params: Prisma.FilesDeleteArgs = {
      where: { id: id },
    };
    return this.filesService.delete(params);
  }
}
