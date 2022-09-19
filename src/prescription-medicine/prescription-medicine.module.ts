import { Module } from '@nestjs/common';
import { PrescriptionMedicineService } from './prescription-medicine.service';
import { PrescriptionMedicineController } from './prescription-medicine.controller';

@Module({
  controllers: [PrescriptionMedicineController],
  providers: [PrescriptionMedicineService],
  exports: [PrescriptionMedicineService],
})
export class PrescriptionMedicineModule {}

