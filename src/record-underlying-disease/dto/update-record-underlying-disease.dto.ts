import { PartialType } from '@nestjs/swagger';
import { CreateRecordUnderlyingDiseaseDto } from './create-record-underlying-disease.dto';

export class UpdateRecordUnderlyingDiseaseDto extends PartialType(CreateRecordUnderlyingDiseaseDto) {}
