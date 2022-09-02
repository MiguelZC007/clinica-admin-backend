import { Module } from '@nestjs/common';
import { PhysicalExamService } from './physical-exam.service';
import { PhysicalExamController } from './physical-exam.controller';

@Module({
  controllers: [PhysicalExamController],
  providers: [PhysicalExamService],
  exports: [PhysicalExamService]
})
export class PhysicalExamModule { }
