import { PartialType } from '@nestjs/swagger';
import { CreateMedicalHistoryDetailDto } from './create-medical-history-detail.dto';

export class UpdateMedicalHistoryDetailDto extends PartialType(CreateMedicalHistoryDetailDto) {}
