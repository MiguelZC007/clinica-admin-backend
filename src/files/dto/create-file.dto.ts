import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBase64, IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateFileDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBase64()
  file?: string | null;

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
