import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateVitalSignsHemodialysiDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  hemodialysis_session_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  hour: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pa: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fc: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  temp: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  blood_flow: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pv: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ptm: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  conductivity: number;
}

