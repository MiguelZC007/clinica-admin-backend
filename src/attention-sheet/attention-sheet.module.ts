import { Module } from '@nestjs/common';
import { AttentionSheetService } from './attention-sheet.service';
import { AttentionSheetController } from './attention-sheet.controller';

@Module({
  controllers: [AttentionSheetController],
  providers: [AttentionSheetService],
  exports: [AttentionSheetService],
})
export class AttentionSheetModule {}

