import { Module } from '@nestjs/common';
import { SaleDetailService } from './sale-detail.service';
import { SaleDetailController } from './sale-detail.controller';

@Module({
  controllers: [SaleDetailController],
  providers: [SaleDetailService],
  exports: [SaleDetailService],
})
export class SaleDetailModule {}
