import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSaleDetailDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  product_id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sale_id: string;
  @ApiProperty()
  @IsPositive()
  @IsInt()
  @IsOptional()
  quantity: number | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  sale_price: number | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  discount: number | null;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  invoiced: boolean | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  meet_id: string | null;
}
