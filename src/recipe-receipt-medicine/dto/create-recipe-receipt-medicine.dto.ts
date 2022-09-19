import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateRecipeReceiptMedicineDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  recipe_receipt_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  medicine_id: string;
  @ApiPropertyOptional()
  @IsOptional()
  prescribed?: number;
  @ApiPropertyOptional()
  @IsOptional()
  dispensed?: number;
}

