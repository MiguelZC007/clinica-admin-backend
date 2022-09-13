import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateMedicineDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  common_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  formula: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  medicine_concentration_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  maker_medicine_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  pharmaceutical_form_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  product_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  medicine_generic_name_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  recommendations?: Array<string>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  conditions_conservation?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

