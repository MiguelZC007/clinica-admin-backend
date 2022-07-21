import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { compareSync, hashSync } from 'bcrypt';
import { Prisma } from '@prisma/client';
import { SessionService } from 'src/session/session.service';
import { UserService } from 'src/user/user.service';

@ApiTags('Authentication')
@Controller({ version: '1', path: 'auth/admin' })
export class AuthController {
  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private usersService: UserService,
  ) {}

  @ApiOperation({ summary: 'Entrar al sistema' })
  @Post('login')
  async login(@Body() data: LoginDto) {
    let user_params: Prisma.UserFindFirstArgs = {
      where: {
        email: data.email,
        user_rol: {
          some: {
            rol: {
              name: 'ADMIN',
            },
          },
        },
        active: true,
      },
    };
    let user = await this.usersService.findFirst(user_params);

    if (user != null && compareSync(data.password, user.password)) {
      return await this.authService.createToken(user);
    } else {
      throw new BadRequestException('Usuario o contraseña incorrectos');
    }
  }

  @ApiOperation({ summary: 'Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  async profile(@Req() req: any) {
    try {
      let user: any = req.user;
      let user_params: Prisma.UserFindUniqueArgs = {
        where: { id: user.id },
        select: this.usersService.user_public_select,
      };
      let response = await this.usersService.findUnique(user_params);
      return response;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiOperation({ summary: 'Cambiar Contraseña' })
  @Put('change-password')
  async changePassword(@Body() data: ChangePasswordDto) {
    let params: Prisma.UserUpdateArgs = {
      where: { email: data.email },
      data: {
        password: hashSync(data.password, Number(process.env.SALT_ROUND)),
      },
    };
    let response = await this.usersService.update(params);
    await this.sessionService.updateMany({
      where: { user_id: response.id },
      data: {
        state: false,
      },
    });
    return response;
  }

  @ApiOperation({ summary: 'Salir del Sistema' })
  @Delete('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async logout(@Req() req: any) {
    let user: any = req.user;
    return await this.sessionService.update({
      where: { id: user.session_id },
      data: {
        state: false,
      },
    });
  }
}
