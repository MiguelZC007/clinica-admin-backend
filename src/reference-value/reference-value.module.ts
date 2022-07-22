import { Module } from '@nestjs/common';
import { ReferenceValueService } from './reference-value.service';
import { ReferenceValueController } from './reference-value.controller';

@Module({
  controllers: [ReferenceValueController],
  providers: [ReferenceValueService],
  exports: [ReferenceValueService],
})
export class ReferenceValueModule {}
