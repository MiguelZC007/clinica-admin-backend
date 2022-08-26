import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateSaleDetailDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  product_id: string;

  @ApiProperty()
  @IsUUID()
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
  @IsUUID()
  @IsOptional()
  meet_id: string | null;

}
