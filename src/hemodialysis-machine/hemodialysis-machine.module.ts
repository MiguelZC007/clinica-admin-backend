import { Module } from '@nestjs/common';
import { HemodialysisMachineService } from './hemodialysis-machine.service';
import { HemodialysisMachineController } from './hemodialysis-machine.controller';
import { TurnMachineModule } from 'src/turn-machine/turn-machine.module';

@Module({
  controllers: [HemodialysisMachineController],
  providers: [HemodialysisMachineService],
  exports: [HemodialysisMachineService],
  imports: [TurnMachineModule]
})
export class HemodialysisMachineModule { }
