import { PartialType } from '@nestjs/swagger';
import { CreateDoctorSpecialtyDto } from './create-doctor-specialty.dto';

export class UpdateDoctorSpecialtyDto extends PartialType(CreateDoctorSpecialtyDto) {}
