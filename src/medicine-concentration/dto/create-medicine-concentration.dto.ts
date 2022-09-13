import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMedicineConcentrationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  concentration: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  unit?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

