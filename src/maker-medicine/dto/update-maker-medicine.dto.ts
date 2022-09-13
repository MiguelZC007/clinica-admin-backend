import { PartialType } from '@nestjs/swagger';
import { CreateMakerMedicineDto } from './create-maker-medicine.dto';

export class UpdateMakerMedicineDto extends PartialType(CreateMakerMedicineDto) {}
