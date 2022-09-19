import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateReceiptDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  hemodialysis_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  net?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sedes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  establishment?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type_atention?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  diagnostic?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dispensed_date: string;
}

