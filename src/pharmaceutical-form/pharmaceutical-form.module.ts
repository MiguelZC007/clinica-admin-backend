import { Module } from '@nestjs/common';
import { PharmaceuticalFormService } from './pharmaceutical-form.service';
import { PharmaceuticalFormController } from './pharmaceutical-form.controller';

@Module({
  controllers: [PharmaceuticalFormController],
  providers: [PharmaceuticalFormService],
  exports: [PharmaceuticalFormService],
})
export class PharmaceuticalFormModule {}

