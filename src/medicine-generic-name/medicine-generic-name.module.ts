import { Module } from '@nestjs/common';
import { MedicineGenericNameService } from './medicine-generic-name.service';
import { MedicineGenericNameController } from './medicine-generic-name.controller';

@Module({
  controllers: [MedicineGenericNameController],
  providers: [MedicineGenericNameService],
  exports: [MedicineGenericNameService],
})
export class MedicineGenericNameModule {}

