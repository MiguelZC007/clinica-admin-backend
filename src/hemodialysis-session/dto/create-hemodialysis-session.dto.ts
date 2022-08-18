import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHemodialysisSessionDto {
  @ApiProperty()
  @IsString()
  hemodialysis_id: string;

  @ApiProperty()
  @IsString()
  number_session: string;

  @ApiProperty()
  number_machine: number;

  @ApiProperty()
  @IsString()
  check_in: Date | string;

  @ApiProperty()
  @IsString()
  check_out: Date | string;

  @ApiProperty()
  @IsString()
  date: Date | string;

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
  dry_weight?: number | null;

  @ApiPropertyOptional()
  income_weight?: number | null;

  @ApiPropertyOptional()
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
