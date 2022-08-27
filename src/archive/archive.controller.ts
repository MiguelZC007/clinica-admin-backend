import { Controller, Get, Query, Res, } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { ArchiveService } from './archive.service';

@ApiTags("Archivos")
@ApiBearerAuth()
@Controller({ version: "1", path: 'archive' })
export class ArchiveController {
  constructor(private readonly archiveService: ArchiveService) { }

  @Get()
  @Auth("ADMIN")
  async obtenerDocumento(@Query('filename') filename: string, @Res() res) {
    this.archiveService
      .getFile(filename)
      .then((re) => {
        res.send(re);
      })
      .catch((e) => {
        console.log(e);
        res.status(e.status || 404).send(e);
      });
  }
}
