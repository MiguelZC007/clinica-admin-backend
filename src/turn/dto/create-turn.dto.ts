import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTurnDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string | null;

  @ApiProperty()
  @IsArray()
  days: Array<number>;

  @ApiProperty()
  @IsDateString()
  check_in: string;

  @ApiProperty()
  @IsDateString()
  check_out: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  active?: boolean | null;
}
