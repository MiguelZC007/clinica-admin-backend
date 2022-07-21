import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, UserModule, AuthModule, SessionModule],
})
export class AppModule {}
