import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateHemodialysisSessionDto {
  @ApiProperty()
  @IsUUID()
  hemodialysis_id: string;

  @ApiProperty()
  @IsString()
  number_session: string;

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
  @IsString()
  ultrafiltration_session: string;

  @ApiProperty()
  @IsString()
  ultrafiltration_end: string;

  @ApiProperty()
  @IsString()
  filter_reuse: string;

  @ApiProperty()
  @IsString()
  line_reuse: string;

  @ApiProperty()
  @IsString()
  heparin: string;

  @ApiProperty()
  @IsString()
  ktv: string;

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
}
