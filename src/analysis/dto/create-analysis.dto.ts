import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAnalysisDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  product_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  category_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  order?: number | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  state?: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  reference_value_id?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  parent_id?: string | null;
}
