import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateAnalysisDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  product_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
  reference_value_id?: string | null;
  @ApiProperty()
  @IsOptional()
  @IsString()
  parent_id?: string | null;
}
