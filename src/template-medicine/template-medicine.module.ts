import { Module } from '@nestjs/common';
import { TemplateMedicineService } from './template-medicine.service';
import { TemplateMedicineController } from './template-medicine.controller';

@Module({
  controllers: [TemplateMedicineController],
  providers: [TemplateMedicineService],
  exports: [TemplateMedicineService],
})
export class TemplateMedicineModule {}

