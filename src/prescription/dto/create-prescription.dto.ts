import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePrescriptionDto {
  @ApiProperty()
  @IsNotEmpty()
  quantity?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  medicine_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  from?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  to?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  duration?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  frequency?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  medical_history_detail_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  prescription_hemodialysis_id?: string | null;
}

