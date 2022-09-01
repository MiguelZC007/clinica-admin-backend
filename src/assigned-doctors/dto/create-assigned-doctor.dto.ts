import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsUUID } from "class-validator"

export class CreateAssignedDoctorDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    medical_history_id: string
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    doctor_id: string
}
