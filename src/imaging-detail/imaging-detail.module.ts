import { Module } from '@nestjs/common';
import { ImagingDetailService } from './imaging-detail.service';
import { ImagingDetailController } from './imaging-detail.controller';

@Module({
  controllers: [ImagingDetailController],
  providers: [ImagingDetailService],
  exports: [ImagingDetailService]
})
export class ImagingDetailModule { }
