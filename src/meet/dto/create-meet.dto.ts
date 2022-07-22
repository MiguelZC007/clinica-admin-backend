import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMeetDto {
  @ApiProperty()
  @IsDateString()
  from?: string | null = new Date().toISOString();
  @ApiProperty()
  @IsDateString()
  to?: string | null = new Date().toISOString();
  @ApiProperty({
    enum: [
      'RESERVADO',
      'ATENDIDO',
      'AUSENTE',
      'REPROGRAMADO',
      'ELIMINADO',
      'SIGNOS_VITALES',
    ],
    default: 'RESERVADO',
  })
  @IsString({ message: 'El dato debe ser un string' })
  state?: string | null;
  @ApiProperty()
  @IsString({ message: 'El dato debe ser un string' })
  @IsNotEmpty()
  patient_id: string;
  @ApiProperty()
  @IsString({ message: 'El dato debe ser un string' })
  @IsNotEmpty()
  doctor_id: string;
  @ApiProperty()
  @IsString({ message: 'El dato debe ser un string' })
  @IsOptional()
  specialty_id?: string | null;
}
