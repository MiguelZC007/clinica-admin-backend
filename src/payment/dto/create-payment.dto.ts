import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  sale_id?: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  cashier_id?: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  patient_id?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  amount?: number | null;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  residue?: number | null;

  @ApiProperty({
    enum: ['EFECTIVO', 'TRANSFERENCIA', 'ANULADO', 'DEVOLUCION'],
  })
  @IsString()
  @IsOptional()
  type?: string | null;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  active?: boolean | null;
}
