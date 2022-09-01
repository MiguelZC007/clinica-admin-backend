import { Module } from '@nestjs/common';
import { AssignedDoctorsService } from './assigned-doctors.service';
import { AssignedDoctorsController } from './assigned-doctors.controller';

@Module({
  controllers: [AssignedDoctorsController],
  providers: [AssignedDoctorsService],
  exports: [AssignedDoctorsService]
})
export class AssignedDoctorsModule { }
