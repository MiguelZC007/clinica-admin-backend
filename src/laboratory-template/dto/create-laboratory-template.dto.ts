import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateLaboratoryTemplateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean
}
