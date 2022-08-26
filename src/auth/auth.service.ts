import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { compareSync, hashSync } from 'bcrypt';
import { JwtPayload } from 'src/auth/jwt-payload';
import { UserService } from 'src/user/user.service';
import { SessionService } from 'src/session/session.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
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
      let session = await this.sessionService.create({
        data: {
          token: '',
          expire_in: process.env.JWT_TIME,
          user_id: user.id,
        },
      });
      console.log('token user', user);
      let User: JwtPayload = {
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

  // async registerEmployee(data: CreateAuthDto) {
  //   try {
  //     if (data.password === data.confirm_password) {
  //       let { rol_id, confirm_password, ...rsa } = data;
  //       const params: Prisma.UserCreateArgs = {
  //         data: {
  //           ...rsa,
  //           password: hashSync(data.password, Number(process.env.SALT_ROUND)),
  //           user_rol: {
  //             create: {
  //               rol_id: rol_id,
  //             },
  //           },
  //           user_working_hour: {
  //             create: {},
  //           },
  //         } as Prisma.UserCreateInput,
  //         select: this.userService.employee_select,
  //       };
  //       let response = await this.userService.create(params);
  //       return response;
  //     } else {
  //       throw new BadRequestException({
  //         message: 'Las Contraseñas no coinciden',
  //       });
  //     }
  //   } catch (e) {
  //     throw new BadRequestException({ ...e });
  //   }
  // }

  // async registerPatient(patient: CreatePatientDto) {
  //   try {
  //     const params: Prisma.UserCreateArgs = {
  //       data: {
  //         ...patient,
  //         user_rol: {
  //           create: {
  //             rol: {
  //               connect: {
  //                 name: 'PACIENTE',
  //               },
  //             },
  //           },
  //         },
  //       } as Prisma.UserCreateInput,
  //       select: this.userService.patient_select,
  //     };
  //     return await this.userService.create(params);
  //   } catch (e) {
  //     throw new BadRequestException({ ...e });
  //   }
  // }

  // async login(login) {
  //   const params: Prisma.UserFindFirstArgs = {
  //     where: {
  //       email: login.email,
  //       active: true,
  //     },
  //     select: {
  //       ...this.userService.employee_private_select,
  //       specialties: {
  //         include: {
  //           specialty: true,
  //         },
  //       },
  //     },
  //   };
  //   let user: any = await this.userService.findFirst(params);
  //   if (user) {
  //     if (compareSync(login.password, user.password)) {
  //       delete user.password;
  //       user = {
  //         ...user,
  //         user_rol: user.user_rol!.map((item) => {
  //           let { rol, ...rest } = item;
  //           return {
  //             ...rest,
  //             rol: rol.name,
  //           };
  //         }),
  //         specialties: user.specialties!.map((item) => {
  //           return item.specialty.name;
  //         }),
  //       };
  //       let session: any = await this.createToken(user);
  //       let { user: employee, ...rsa } = session;

  //       return {
  //         user: {
  //           ...user,
  //           user_rol: user.user_rol.map((item) => {
  //             let { rol, ...usr_rol } = item;
  //             return {
  //               ...usr_rol,
  //               rol: rol.name,
  //             };
  //           }),
  //         },
  //         token: {
  //           access_token: rsa.token,
  //           expire_in: rsa.expire_in,
  //           session_id: rsa.id,
  //         },
  //       };
  //     } else {
  //       throw new BadRequestException('Contraseña incorrecta');
  //     }
  //   } else {
  //     throw new BadRequestException('Usuario no existe');
  //   }
  // }

  // changePassword(data: ChangePasswordhDto) {
  //   return new Promise((resolve, reject) => {
  //     if (data.password === data.confirm_password) {
  //       const hash = hashSync(data.password, Number(process.env.SALT_ROUND));
  //       this.prisma.user
  //         .update({
  //           where: { email: data.email } as Prisma.UserWhereUniqueInput,
  //           data: {
  //             password: hash,
  //           },
  //         })
  //         .then(async (response) => {
  //           await this.sessionService.updateMany({
  //             where: {
  //               user_id: response.id,
  //             },
  //             data: {
  //               state: false,
  //             },
  //           });
  //           resolve({ message: 'Contraseña Cambiada Correctamente' });
  //         })
  //         .catch((e) => {
  //           reject({ message: 'Error al cambiar contraseña', e });
  //         });
  //     } else {
  //       reject({ message: 'Las Contraseñas no coinciden' });
  //     }
  //   });
  // }
}
