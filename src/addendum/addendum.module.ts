import { Module } from '@nestjs/common';
import { AddendumService } from './addendum.service';
import { AddendumController } from './addendum.controller';

@Module({
  controllers: [AddendumController],
  providers: [AddendumService],
  exports: [AddendumService],
})
export class AddendumModule { }
