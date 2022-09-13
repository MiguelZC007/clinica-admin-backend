import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAttentionSheetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number_enabled_machines: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number_positive_serology_machines: number;

  @ApiPropertyOptional({
    default: 'HOSPITAL MARIA ESPERANZA S.R.L.',
  })
  @IsString()
  @IsOptional()
  hospital_name?: string;

  @ApiPropertyOptional({
    default: 'PRIVADO CONVENIO',
  })
  @IsString()
  @IsOptional()
  hospital_type?: string;
}

