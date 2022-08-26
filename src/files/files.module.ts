import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ArchiveModule } from 'src/archive/archive.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesService],
  imports: [ArchiveModule]
})
export class FilesModule { }
