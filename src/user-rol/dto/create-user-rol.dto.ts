import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserRolDto {
  @ApiProperty()
  @IsNotEmpty()
  rol_id: string;
  @ApiProperty()
  @IsNotEmpty()
  user_id: string;
}
