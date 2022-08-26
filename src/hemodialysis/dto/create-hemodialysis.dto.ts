import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateHemodialysisDto {
  @ApiProperty()
  @IsString()
  patient_id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  vascular_access: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  regisration_date: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  diagnostic: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  pathologies: string;
}
