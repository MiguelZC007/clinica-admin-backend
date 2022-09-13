import { PartialType } from '@nestjs/swagger';
import { CreateMedicineConcentrationDto } from './create-medicine-concentration.dto';

export class UpdateMedicineConcentrationDto extends PartialType(CreateMedicineConcentrationDto) {}
