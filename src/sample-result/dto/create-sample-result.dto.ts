import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBase64, IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSampleResultDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    sample_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    analysis_id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBase64()
    file: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    ext: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    attached: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    danger: boolean | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    result: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    within_range: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    out_of_range: string | null;

    @ApiPropertyOptional({
        enum: ['ENTREGADO', 'PENDIENTE', 'PROCESO', 'TERMINADO', 'ANULADO'],
        default: 'PENDIENTE',
    })
    type: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    state: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    value_reference: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID()
    reference_value_id: string | null;
}

