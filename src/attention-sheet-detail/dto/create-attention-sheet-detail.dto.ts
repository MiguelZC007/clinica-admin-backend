import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAttentionSheetDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  patient_id: string;

  @ApiProperty({
    enum: ['CATETER', 'FISTULA'],
  })
  @IsNotEmpty()
  @IsString()
  vascular_access: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number_sessions: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observation?: string | null;
}

