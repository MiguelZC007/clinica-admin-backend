import { PartialType } from '@nestjs/swagger';
import { CreateMedicineGenericNameDto } from './create-medicine-generic-name.dto';

export class UpdateMedicineGenericNameDto extends PartialType(CreateMedicineGenericNameDto) {}
