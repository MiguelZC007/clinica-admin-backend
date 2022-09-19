import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsUUID, Min } from 'class-validator';

export class CreatePrescriptionMedicineDto {
  @ApiProperty()
  @IsUUID()
  medicine_id: string;

  @ApiProperty()
  @IsUUID()
  template_medicine_id: string;

  @ApiPropertyOptional()
  @IsInt()
  @Min(0)
  quantity?: number = 0;
}

