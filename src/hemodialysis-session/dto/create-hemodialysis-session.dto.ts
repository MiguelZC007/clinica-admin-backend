import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateHemodialysisSessionDto {
  @ApiProperty()
  @IsUUID()
  hemodialysis_id: string;

  @ApiProperty()
  @IsNumber()
  number_session: number;

  @ApiProperty()
  @IsPositive()
  number_machine: number;

  @ApiProperty()
  @IsDateString()
  check_in: string;

  @ApiProperty()
  @IsDateString()
  check_out: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsNumber()
  ultrafiltration_session: number;

  @ApiProperty()
  @IsNumber()
  ultrafiltration_end: number;

  @ApiProperty()
  @IsNumber()
  filter_reuse: number;

  @ApiProperty()
  @IsNumber()
  line_reuse: number;

  @ApiProperty()
  @IsNumber()
  heparin: number;

  @ApiProperty()
  @IsNumber()
  ktv: number;

  @ApiProperty()
  @IsNumber()
  oxygenation: number;

  @ApiProperty()
  @IsString()
  pa_entry: string;

  @ApiProperty({
    enum: ['CATETER', 'FISTULA'],
  })
  @IsString()
  vascular_access: string;

  @ApiPropertyOptional()
  @IsNumber()
  dry_weight?: number | null;

  @ApiPropertyOptional()
  @IsNumber()
  income_weight?: number | null;

  @ApiPropertyOptional()
  @IsNumber()
  egress_weight?: number | null;

  @ApiPropertyOptional()
  @IsString()
  filter_type?: string;

  @ApiPropertyOptional()
  @IsString()
  ingest?: string;

  @ApiPropertyOptional()
  @IsString()
  treatment?: string | null;

  @ApiPropertyOptional()
  @IsString()
  nursing_evaluation?: string | null;

  @ApiPropertyOptional()
  @IsString()
  clinic_evaluation?: string | null;

  @ApiPropertyOptional({
    enum: ['CONVENIO', 'EXTRA'],
  })
  @IsString()
  type_hemodialysis?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  blocked?: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  attended?: boolean;
}
