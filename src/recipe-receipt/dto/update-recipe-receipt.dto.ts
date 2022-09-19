import { PartialType } from '@nestjs/swagger';
import { CreateRecipeReceiptDto } from './create-recipe-receipt.dto';

export class UpdateRecipeReceiptDto extends PartialType(CreateRecipeReceiptDto) {}
