import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateSampleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    laboratory_id: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name: string | null

    @ApiPropertyOptional({
        enum: [
            'REACTIVO',
            'CONTEO',
            'OTRO'
        ],
        default: "REACTIVO"
    })
    @IsOptional()
    @IsString()
    type: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state: boolean

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    product_id: string

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    sale_detail_id: string | null
}
