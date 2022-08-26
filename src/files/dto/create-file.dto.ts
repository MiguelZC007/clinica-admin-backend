import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBase64, IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateFileDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsBase64()
  file?: string | null;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  ext?: string | null;

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
  @IsUUID()
  hemodialysis_id: string;
}
