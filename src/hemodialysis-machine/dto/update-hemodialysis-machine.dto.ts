import { PartialType } from '@nestjs/swagger';
import { CreateHemodialysisMachineDto } from './create-hemodialysis-machine.dto';

export class UpdateHemodialysisMachineDto extends PartialType(CreateHemodialysisMachineDto) { }
