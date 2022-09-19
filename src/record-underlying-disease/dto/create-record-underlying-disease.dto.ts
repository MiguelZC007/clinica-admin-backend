import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateRecordUnderlyingDiseaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  disease?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  icd_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  medical_history_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  medical_history_detail_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  hemodialysis_id?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  diagnostic_id?: string | null;
}

