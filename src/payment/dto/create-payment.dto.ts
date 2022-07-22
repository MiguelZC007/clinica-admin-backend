import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sale_id?: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cashier_id?: string;
  @ApiProperty()
  @IsString()
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
