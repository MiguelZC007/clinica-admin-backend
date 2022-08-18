import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateHemodialysisDto {
  @ApiProperty()
  @IsString()
  patient_id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  vascular_access?: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  registration_date?: string;
}
