import { PartialType } from '@nestjs/swagger';
import { CreateTurnMachineDto } from './create-turn-machine.dto';

export class UpdateTurnMachineDto extends PartialType(CreateTurnMachineDto) {}
