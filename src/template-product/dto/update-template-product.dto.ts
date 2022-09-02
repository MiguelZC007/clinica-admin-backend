import { PartialType } from '@nestjs/swagger';
import { CreateTemplateProductDto } from './create-template-product.dto';

export class UpdateTemplateProductDto extends PartialType(CreateTemplateProductDto) {}
