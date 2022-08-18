import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTurnMachineDto {
  @ApiProperty()
  turn_id: string;
  @ApiProperty()
  machine_id: string;
  @ApiPropertyOptional({
    enum: ['LIBRE', 'OCUPADO'],
  })
  state?: string;
}
