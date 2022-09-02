import { PartialType } from '@nestjs/swagger';
import { CreateVitalSignsHemodialysiDto } from './create-vital-signs-hemodialysi.dto';

export class UpdateVitalSignsHemodialysiDto extends PartialType(CreateVitalSignsHemodialysiDto) {}
