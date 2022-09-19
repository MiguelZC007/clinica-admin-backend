import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCategoryAnalysisDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
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
