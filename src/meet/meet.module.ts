import { Module } from '@nestjs/common';
import { MeetService } from './meet.service';
import { MeetController } from './meet.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [MeetController],
  providers: [MeetService],
  exports: [MeetService],
  imports: [UserModule],
})
export class MeetModule {}
