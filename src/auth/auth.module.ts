import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwtStrategy';
import { AuthController } from './auth.controller';
import { SessionModule } from 'src/session/session.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    PassportModule,
    PrismaModule,
    SessionModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_TIME,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
