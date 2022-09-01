import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateLaboratoryDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    patient_id: string;

    @ApiPropertyOptional()
    @IsUUID()
    @IsOptional()
    medical_history_detail_id: string | null;

    @ApiPropertyOptional()
    @IsUUID()
    @IsNotEmpty()
    sale_id: string | null;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description: string | null;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    observation: string | null;

    @ApiProperty({
        default: "PENDIENTE",
        enum: ['ENTREGADO', 'PENDIENTE', 'PROCESO', 'TERMINADO', 'ANULADO'],
    })
    @IsString()
    type: string;

    @ApiPropertyOptional()
    @IsBoolean()
    state: boolean | null;
}

