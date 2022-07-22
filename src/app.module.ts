import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { UserRolModule } from './user-rol/user-rol.module';
import { RolModule } from './rol/rol.module';
import { MeetModule } from './meet/meet.module';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, UserModule, AuthModule, SessionModule, UserRolModule, RolModule, MeetModule, SpecialtyModule],
})
export class AppModule {}
