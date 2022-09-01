import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class CreateImagingDetailDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    sale_detail_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    product_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    imaging_id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description: string | null;

    @ApiPropertyOptional({
        default: 'PENDIENTE',
        enum: ['PENDIENTE', 'TERMINADO', 'ANULADO'],
    })
    @IsOptional()
    @IsString()
    type: string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state: boolean | null;
}

