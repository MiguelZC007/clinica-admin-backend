import { Module } from '@nestjs/common';
import { TurnMachineService } from './turn-machine.service';
import { TurnMachineController } from './turn-machine.controller';

@Module({
  controllers: [TurnMachineController],
  providers: [TurnMachineService],
  exports: [TurnMachineService],
})
export class TurnMachineModule {}
