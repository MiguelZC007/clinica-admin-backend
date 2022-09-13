import { PartialType } from '@nestjs/swagger';
import { CreateAttentionSheetDetailDto } from './create-attention-sheet-detail.dto';

export class UpdateAttentionSheetDetailDto extends PartialType(CreateAttentionSheetDetailDto) {}
