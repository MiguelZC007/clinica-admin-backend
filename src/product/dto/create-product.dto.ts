import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price: number | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  state: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  programmable: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sub_category: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  category_id: string;
}
