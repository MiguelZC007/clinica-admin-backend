import { PartialType } from '@nestjs/swagger';
import { CreatePrescriptionMedicineDto } from './create-prescription-medicine.dto';

export class UpdatePrescriptionMedicineDto extends PartialType(CreatePrescriptionMedicineDto) {}
