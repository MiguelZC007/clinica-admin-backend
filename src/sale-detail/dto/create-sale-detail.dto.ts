import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
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
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity: number | null;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  sale_price: number | null;

  @ApiProperty()
  @IsNumber()
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
