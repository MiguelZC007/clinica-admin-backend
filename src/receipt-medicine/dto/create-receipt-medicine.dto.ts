import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID, Min } from 'class-validator';

export class CreateReceiptMedicineDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  receipt_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  medicine_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  indications: string;

  @ApiPropertyOptional()
  @IsInt()
  @Min(0)
  prescribed?: number;

  @ApiPropertyOptional()
  @IsInt()
  @Min(0)
  dispensed?: number;
}

