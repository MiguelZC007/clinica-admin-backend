import { Module } from '@nestjs/common';
import { CategoryAnalysisService } from './category-analysis.service';
import { CategoryAnalysisController } from './category-analysis.controller';

@Module({
  controllers: [CategoryAnalysisController],
  providers: [CategoryAnalysisService],
  exports: [CategoryAnalysisService],
})
export class CategoryAnalysisModule {}
