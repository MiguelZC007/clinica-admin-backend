import { PartialType } from '@nestjs/swagger';
import { CreateLaboratoryTemplateDto } from './create-laboratory-template.dto';

export class UpdateLaboratoryTemplateDto extends PartialType(CreateLaboratoryTemplateDto) {}
