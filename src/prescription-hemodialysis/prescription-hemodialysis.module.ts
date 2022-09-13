import { Module } from '@nestjs/common';
import { PrescriptionHemodialysisService } from './prescription-hemodialysis.service';
import { PrescriptionHemodialysisController } from './prescription-hemodialysis.controller';

@Module({
  controllers: [PrescriptionHemodialysisController],
  providers: [PrescriptionHemodialysisService],
  exports: [PrescriptionHemodialysisService],
})
export class PrescriptionHemodialysisModule {}

