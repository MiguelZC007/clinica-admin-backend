import { PartialType } from '@nestjs/swagger';
import { CreateRecipeReceiptMedicineDto } from './create-recipe-receipt-medicine.dto';

export class UpdateRecipeReceiptMedicineDto extends PartialType(CreateRecipeReceiptMedicineDto) {}
