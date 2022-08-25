import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTurnMachineDto {
  @ApiProperty()
  @IsString()
  turn_id: string;
  @ApiProperty()
  @IsString()
  machine_id: string;
  @ApiPropertyOptional({
    enum: ['LIBRE', 'OCUPADO'],
  })
  @IsString()
  @IsOptional()
  state?: string;
}
