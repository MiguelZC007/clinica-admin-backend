import { PartialType } from '@nestjs/swagger';
import { CreateCategoryAnalysisDto } from './create-category-analysis.dto';

export class UpdateCategoryAnalysisDto extends PartialType(
  CreateCategoryAnalysisDto,
) { }
