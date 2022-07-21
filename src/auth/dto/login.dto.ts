import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Correo Electronico',
    default: 'admin@gmail.com',
  })
  @IsEmail({}, { message: 'debe ingresar un correo electronico valido' })
  email: string;

  @ApiProperty({
    description: 'Contraseña',
    default: '123456',
  })
  @IsNotEmpty({ message: 'debe ingresar una contraseña' })
  password: string;
}
