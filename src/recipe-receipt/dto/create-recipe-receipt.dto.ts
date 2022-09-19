import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateRecipeReceiptDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  hemodialysis_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  year: string;

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
  sus?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  number_session_fistula?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  number_session_catheter?: number;

  @ApiPropertyOptional({
    enum: ['MASCULINO', 'FEMENINO'],
  })
  @IsOptional()
  @IsString()
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  diagnostic?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  other?: string | null;
}

