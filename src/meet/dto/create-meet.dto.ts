import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateMeetDto {
  @ApiProperty()
  @IsDateString()
  from?: string | null

  @ApiProperty()
  @IsDateString()
  to?: string | null

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
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  state?: string | null;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  patient_id: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  doctor_id: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  specialty_id?: string | null;
}
