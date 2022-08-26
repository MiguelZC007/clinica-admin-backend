import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTurnMachineDto {
  @ApiProperty()
  @IsUUID()
  turn_id: string;

  @ApiProperty()
  @IsUUID()
  machine_id: string;

  @ApiPropertyOptional({
    enum: ['LIBRE', 'OCUPADO'],
  })
  @IsString()
  @IsOptional()
  state?: string;

}
