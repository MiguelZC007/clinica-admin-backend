import { Module } from '@nestjs/common';
import { MakerMedicineService } from './maker-medicine.service';
import { MakerMedicineController } from './maker-medicine.controller';

@Module({
  controllers: [MakerMedicineController],
  providers: [MakerMedicineService],
  exports: [MakerMedicineService],
})
export class MakerMedicineModule {}

