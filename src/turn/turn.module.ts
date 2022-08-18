import { Module } from '@nestjs/common';
import { TurnService } from './turn.service';
import { TurnController } from './turn.controller';
import { TurnMachineModule } from 'src/turn-machine/turn-machine.module';

@Module({
  controllers: [TurnController],
  providers: [TurnService],
  exports: [TurnService],
  imports: [TurnMachineModule],
})
export class TurnModule {}
