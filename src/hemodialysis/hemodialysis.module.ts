import { Module } from '@nestjs/common';
import { HemodialysisService } from './hemodialysis.service';
import { HemodialysisController } from './hemodialysis.controller';
import { HemodialysisSessionModule } from 'src/hemodialysis-session/hemodialysis-session.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  controllers: [HemodialysisController],
  providers: [HemodialysisService],
  exports: [HemodialysisService],
  imports: [HemodialysisSessionModule, ProductModule],
})
export class HemodialysisModule {}
