import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateHemodialysisMachineDto {
  @ApiProperty()
  @IsUUID()
  hemodialysis_id: string;
  @ApiProperty()
  @IsUUID()
  turn_machine_id: string;
}
