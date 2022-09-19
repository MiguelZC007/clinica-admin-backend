import { Module } from '@nestjs/common';
import { RecipeReceiptMedicineService } from './recipe-receipt-medicine.service';
import { RecipeReceiptMedicineController } from './recipe-receipt-medicine.controller';

@Module({
  controllers: [RecipeReceiptMedicineController],
  providers: [RecipeReceiptMedicineService],
  exports: [RecipeReceiptMedicineService],
})
export class RecipeReceiptMedicineModule {}

