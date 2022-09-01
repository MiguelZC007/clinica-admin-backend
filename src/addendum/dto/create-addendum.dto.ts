import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateAddendumDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string | null

    @ApiProperty()
    @IsOptional()
    @IsUUID()
    medical_history_detail_id: string | null

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    user_created_id: string

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    state: boolean

    @ApiProperty()
    @IsOptional()
    @IsUUID()
    vital_signs_id: string | null
}
