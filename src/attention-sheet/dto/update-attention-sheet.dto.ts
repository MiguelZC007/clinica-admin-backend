import { PartialType } from '@nestjs/swagger';
import { CreateAttentionSheetDto } from './create-attention-sheet.dto';

export class UpdateAttentionSheetDto extends PartialType(CreateAttentionSheetDto) {}
