import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsArray,
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class CreateMedicalHistoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    patient_id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    paternal_family_record?: Array<string>;

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    maternal_family_record?: Array<string>;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    surgical_record?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    laboratory_record?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    medicines?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    social_record?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    smokes?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    is_smokes?: boolean | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    allergies?: Array<string>;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    blood_type?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean | null;

    @ApiPropertyOptional({
        enum: ['INTERNO', 'EXTERNO'],
        default: 'EXTERNO',
    })
    @IsOptional()
    @IsString()
    patient_type?: string | null;
}

