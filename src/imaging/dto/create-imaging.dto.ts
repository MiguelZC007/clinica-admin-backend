import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateImagingDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    patient_id: string

    @ApiPropertyOptional()
    @IsOptional()
    doctor_id?: string | null

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    sale_id?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID()
    medical_history_detail_id?: string | null

    @ApiPropertyOptional({
        default: "PENDIENTE",
        enum: ['PENDIENTE',
            'TERMINADO',
            'ANULADO']
    })
    @IsOptional()
    @IsString()
    type?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean | null
}


