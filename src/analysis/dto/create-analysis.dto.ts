import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAnalysisDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  product_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  category_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @IsInt()
  order?: number | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  state?: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUUID()
  reference_value_id?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUUID()
  parent_id?: string | null;
}
