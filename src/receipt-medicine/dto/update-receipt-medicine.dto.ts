import { PartialType } from '@nestjs/swagger';
import { CreateReceiptMedicineDto } from './create-receipt-medicine.dto';

export class UpdateReceiptMedicineDto extends PartialType(CreateReceiptMedicineDto) {}
