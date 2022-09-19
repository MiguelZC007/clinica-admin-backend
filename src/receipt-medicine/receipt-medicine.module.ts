import { Module } from '@nestjs/common';
import { ReceiptMedicineService } from './receipt-medicine.service';
import { ReceiptMedicineController } from './receipt-medicine.controller';

@Module({
  controllers: [ReceiptMedicineController],
  providers: [ReceiptMedicineService],
  exports: [ReceiptMedicineService],
})
export class ReceiptMedicineModule {}

