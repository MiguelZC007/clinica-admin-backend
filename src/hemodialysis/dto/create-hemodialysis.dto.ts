import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateHemodialysisDto {
  @ApiProperty()
  @IsString()
  @IsUUID()
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
  pathologies: string;

  @ApiPropertyOptional({
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  deceased: boolean;
}
