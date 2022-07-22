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

export class CreateCategoryAnalysisDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsInt()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  order: number | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string | null;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  active: boolean;
}
