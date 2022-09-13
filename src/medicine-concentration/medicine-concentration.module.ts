import { Module } from '@nestjs/common';
import { MedicineConcentrationService } from './medicine-concentration.service';
import { MedicineConcentrationController } from './medicine-concentration.controller';

@Module({
  controllers: [MedicineConcentrationController],
  providers: [MedicineConcentrationService],
  exports: [MedicineConcentrationService],
})
export class MedicineConcentrationModule {}

