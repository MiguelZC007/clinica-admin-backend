import { Module } from '@nestjs/common';
import { RecipeReceiptService } from './recipe-receipt.service';
import { RecipeReceiptController } from './recipe-receipt.controller';

@Module({
  controllers: [RecipeReceiptController],
  providers: [RecipeReceiptService],
  exports: [RecipeReceiptService],
})
export class RecipeReceiptModule {}

