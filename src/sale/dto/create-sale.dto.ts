import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateSaleDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  patient_id: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  cashier_id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  total_price?: number | null;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  transfer?: number | null;

  @ApiProperty({
    enum: [
      'PAGADO',
      'NO_PAGADO',
      'CREDITO',
      'ELIMINADO',
      'ANULADO',
      'DEVOLUCION',
    ],
  })
  @IsString()
  @IsOptional()
  state?: string | null;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string | null;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  delete_id?: string | null;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  update_id?: string | null;

}
