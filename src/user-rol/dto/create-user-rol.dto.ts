import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserRolDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  rol_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}
