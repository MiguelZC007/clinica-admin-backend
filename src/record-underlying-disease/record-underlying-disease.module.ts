import { Module } from '@nestjs/common';
import { RecordUnderlyingDiseaseService } from './record-underlying-disease.service';
import { RecordUnderlyingDiseaseController } from './record-underlying-disease.controller';

@Module({
  controllers: [RecordUnderlyingDiseaseController],
  providers: [RecordUnderlyingDiseaseService],
  exports: [RecordUnderlyingDiseaseService]
})
export class RecordUnderlyingDiseaseModule { }
