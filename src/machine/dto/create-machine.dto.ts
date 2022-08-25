import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMachineDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string | null;
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  active?: boolean | null;
}
