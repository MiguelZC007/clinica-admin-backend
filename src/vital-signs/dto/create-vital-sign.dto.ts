import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateVitalSignDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    medical_history_detail_id: string

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    user_created_id: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    oxygen_saturation?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    temperature?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    heart_rate?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    breathing_frequency?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    weight?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    height?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    diastolic_pressure?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    systolic_pressure?: string | null

    @ApiPropertyOptional()
    @IsOptional()
    mdrd?: any;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    state?: boolean

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    approve?: boolean
}
