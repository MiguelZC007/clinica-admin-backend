import { PartialType } from '@nestjs/swagger';
import { CreateAssignedDoctorDto } from './create-assigned-doctor.dto';

export class UpdateAssignedDoctorDto extends PartialType(CreateAssignedDoctorDto) {}
