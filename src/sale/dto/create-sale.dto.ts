import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSaleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patient_id: string;
  @ApiProperty()
  @IsString()
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
  @IsString()
  @IsOptional()
  delete_id?: string | null;
  @ApiProperty()
  @IsString()
  @IsOptional()
  update_id?: string | null;
}
