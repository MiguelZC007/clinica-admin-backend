import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class CreatePhysicalExamDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    medical_history_detail_id: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    user_created_id: string;

    @ApiProperty({
        enum: [
            'CONSTITUCIONAL',
            'OJOS',
            'BUCOFARINGEO',
            'CUELLO',
            'CARDIOVASCULAR',
            'PULMONAR',
            'ABDOMEN',
            'GENITOURINARIO',
            'EXTREMIDADES',
            'PIEL',
            'NEUROLOGICO',
        ],
        default: 'CONSTITUCIONAL',
    })
    @IsString()
    @IsNotEmpty()
    physical_exam_type: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    normal?: boolean | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean;
}

