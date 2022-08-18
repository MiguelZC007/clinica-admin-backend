import { Module } from '@nestjs/common';
import { HemodialysisSessionService } from './hemodialysis-session.service';
import { HemodialysisSessionController } from './hemodialysis-session.controller';

@Module({
  controllers: [HemodialysisSessionController],
  providers: [HemodialysisSessionService],
  exports: [HemodialysisSessionService],
})
export class HemodialysisSessionModule {}
