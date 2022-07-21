import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Correo Electronico',
    default: 'admin@gmail.com',
  })
  @IsEmail({}, { message: 'debe ingresar un correo electronico valido' })
  public email: string;

  @ApiProperty({
    description: 'Contraseña',
    default: '123456',
  })
  public password: string;
}
