import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Email',
    default: 'admin@gmail.com',
  })
  @IsEmail({}, { message: 'debe ingresar un correo electronico valido' })
  public email: string;

  @ApiProperty({
    description: 'Contraseña',
    default: '123456',
  })
  @IsNotEmpty({ message: 'debe ingresar una contraseña' })
  public password: string;
}
