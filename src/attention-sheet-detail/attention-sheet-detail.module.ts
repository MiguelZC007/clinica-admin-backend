import { Module } from '@nestjs/common';
import { AttentionSheetDetailService } from './attention-sheet-detail.service';
import { AttentionSheetDetailController } from './attention-sheet-detail.controller';

@Module({
  controllers: [AttentionSheetDetailController],
  providers: [AttentionSheetDetailService],
  exports: [AttentionSheetDetailService],
})
export class AttentionSheetDetailModule {}

