import { Module } from '@nestjs/common';
import { SampleResultService } from './sample-result.service';
import { SampleResultController } from './sample-result.controller';

@Module({
  controllers: [SampleResultController],
  providers: [SampleResultService],
  exports: [SampleResultService],
})
export class SampleResultModule { }
