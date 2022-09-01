import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from "class-validator"

export class CreateDoctorSpecialtyDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    specialty_id: string

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    doctor_id: string

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    state?: boolean | null
}
