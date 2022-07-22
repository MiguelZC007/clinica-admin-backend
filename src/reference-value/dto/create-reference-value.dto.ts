import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReferenceValueDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  value_reference?: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  unit_measurement?: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  maker?: string | null;
  @ApiProperty({
    enum: ['REACTIVO', 'CONTEO', 'OTRO'],
  })
  @IsString()
  @IsOptional()
  type?: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  state?: boolean;
}
