import { Module } from '@nestjs/common';
import { ImagingFilesService } from './imaging-files.service';
import { ImagingFilesController } from './imaging-files.controller';

@Module({
  controllers: [ImagingFilesController],
  providers: [ImagingFilesService],
  exports: [ImagingFilesService]
})
export class ImagingFilesModule { }
