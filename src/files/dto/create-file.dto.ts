import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateFileDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  file?: string | null;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ext?: string | null;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  url?: string | null;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string | null;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string | null;
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  state?: boolean | null;
  @ApiProperty()
  @IsString()
  hemodialysis_id: string;
}
