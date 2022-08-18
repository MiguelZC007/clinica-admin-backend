import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolGuard implements CanActivate {
  constructor(private _reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this._reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (roles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    let hasRole = () => {
      let flag = false;
      roles.forEach((role) => {
        user.user_rol.forEach((rol) => {
          if (rol.rol === role) {
            flag = true;
          }
        });
      });
      return flag;
    };

    if (hasRole()) {
      return true;
    } else {
      throw new ForbiddenException({ message: 'Usuario no autorizado' });
    }
  }
}
