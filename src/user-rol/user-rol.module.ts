import { Module } from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { UserRolController } from './user-rol.controller';

@Module({
  controllers: [UserRolController],
  providers: [UserRolService],
  exports: [UserRolService],
})
export class UserRolModule {}
