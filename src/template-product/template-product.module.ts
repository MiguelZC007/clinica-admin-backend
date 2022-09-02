import { Module } from '@nestjs/common';
import { TemplateProductService } from './template-product.service';
import { TemplateProductController } from './template-product.controller';

@Module({
  controllers: [TemplateProductController],
  providers: [TemplateProductService],
  exports: [TemplateProductService],
})
export class TemplateProductModule { }
