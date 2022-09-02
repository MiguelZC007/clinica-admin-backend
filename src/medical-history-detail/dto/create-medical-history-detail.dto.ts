import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateMedicalHistoryDetailDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    assigned_doctor_id: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    medical_history_id: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    user_created_id: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    specialty_id?: string | null;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    meet_id?: string | null;

    @ApiPropertyOptional({
        default: 'CONSULTA',
        enum: ['CONSULTA', 'SEGUIMIENTO', 'EPICRISIS', 'EVOLUCION'],
    })
    @IsOptional()
    medical_history_type?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    symptoms?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    prescription?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    approve?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID()
    user_approve_id?: string | null;
}

