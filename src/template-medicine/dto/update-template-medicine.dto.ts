import { PartialType } from '@nestjs/swagger';
import { CreateTemplateMedicineDto } from './create-template-medicine.dto';

export class UpdateTemplateMedicineDto extends PartialType(CreateTemplateMedicineDto) {}
