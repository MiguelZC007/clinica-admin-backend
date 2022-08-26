import { PartialType } from '@nestjs/swagger';
import { CreateReferenceValueDto } from './create-reference-value.dto';

export class UpdateReferenceValueDto extends PartialType(
  CreateReferenceValueDto,
) {}
