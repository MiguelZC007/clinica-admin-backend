import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBase64, IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateImagingFileDto {


    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    imaging_detail_id: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsBase64()
    file: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    ext: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    url: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state: boolean | null
}
