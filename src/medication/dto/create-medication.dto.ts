import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateMedicationDto {

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    medical_history_detail_id: string

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    user_created_id: string

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    hemodialysis_session_id?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    from?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    to?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    duration?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    frequency?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    medicine?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean
}
