import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolGuard } from 'src/guards/rol.guard';

export const Auth = (...args: string[]) => {
  return applyDecorators(
    SetMetadata('roles', args),
    UseGuards(JwtAuthGuard, RolGuard),
  );
};
