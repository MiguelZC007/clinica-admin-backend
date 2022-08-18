import { Module } from '@nestjs/common';
import { HemodialysisMachineService } from './hemodialysis-machine.service';
import { HemodialysisMachineController } from './hemodialysis-machine.controller';

@Module({
  controllers: [HemodialysisMachineController],
  providers: [HemodialysisMachineService],
  exports: [HemodialysisMachineService],
})
export class HemodialysisMachineModule {}
