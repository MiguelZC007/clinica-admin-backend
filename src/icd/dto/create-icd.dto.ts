import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateIcdDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    disease: string

    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    active?: boolean | null
}
