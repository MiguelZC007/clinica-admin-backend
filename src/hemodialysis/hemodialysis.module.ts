import { Module } from '@nestjs/common';
import { HemodialysisService } from './hemodialysis.service';
import { HemodialysisController } from './hemodialysis.controller';

@Module({
  controllers: [HemodialysisController],
  providers: [HemodialysisService],
  exports: [HemodialysisService],
})
export class HemodialysisModule {}
