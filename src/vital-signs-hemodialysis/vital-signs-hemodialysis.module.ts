import { Module } from '@nestjs/common';
import { VitalSignsHemodialysisService } from './vital-signs-hemodialysis.service';
import { VitalSignsHemodialysisController } from './vital-signs-hemodialysis.controller';

@Module({
  controllers: [VitalSignsHemodialysisController],
  providers: [VitalSignsHemodialysisService],
  exports: [VitalSignsHemodialysisService],
})
export class VitalSignsHemodialysisModule { }
