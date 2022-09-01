import { Module } from '@nestjs/common';
import { IcdService } from './icd.service';
import { IcdController } from './icd.controller';

@Module({
  controllers: [IcdController],
  providers: [IcdService],
  exports: [IcdService]
})
export class IcdModule { }
