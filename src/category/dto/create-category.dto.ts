import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string | null;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean | null;
}
