import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/jwt-payload';
import { SessionService } from 'src/session/session.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private sessionService: SessionService,
  ) { }

  async validateToken(payload): Promise<any> {
    try {
      const params = {
        where: {
          id: payload.session_id,
          state: true,
          user: {
            active: true,
          },
        },
        include: this.sessionService.session_include,
      } as Prisma.SessionFindFirstArgs;
      return this.sessionService.findFirst(params);
    } catch (e) {
      throw new UnauthorizedException('No tienes acceso a este recurso');
    }
  }

  async createToken(user: any) {
    try {
      const session = await this.sessionService.create({
        data: {
          token: '',
          expire_in: process.env.JWT_TIME,
          user_id: user.id,
        },
      });

      const User: JwtPayload = {
        email: user.email,
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        mother_lastname: user.mother_lastname,
        ci: user.ci,
        user_rol: user.user_rol,
        session_id: session.id,
      };
      const token = await this.jwtService.sign(User);
      return await this.sessionService.update({
        where: { id: session.id } as Prisma.SessionWhereUniqueInput,
        data: {
          token: token,
        },
      });
    } catch (e) {
      throw new BadRequestException({ ...e });
    }
  }
}
