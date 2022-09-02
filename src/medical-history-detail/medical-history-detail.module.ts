import { Module } from '@nestjs/common';
import { MedicalHistoryDetailService } from './medical-history-detail.service';
import { MedicalHistoryDetailController } from './medical-history-detail.controller';

@Module({
  controllers: [MedicalHistoryDetailController],
  providers: [MedicalHistoryDetailService],
  exports: [MedicalHistoryDetailService],
})
export class MedicalHistoryDetailModule { }
