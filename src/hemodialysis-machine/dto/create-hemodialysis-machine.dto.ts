import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHemodialysisMachineDto {
  @ApiProperty()
  @IsString()
  hemodialysis_id: string;
  @ApiProperty()
  @IsString()
  turn_machine_id: string;
}
