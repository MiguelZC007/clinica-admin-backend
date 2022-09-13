import { PartialType } from '@nestjs/swagger';
import { CreatePrescriptionHemodialysisDto } from './create-prescription-hemodialysis.dto';

export class UpdatePrescriptionHemodialysisDto extends PartialType(
  CreatePrescriptionHemodialysisDto,
) {}

