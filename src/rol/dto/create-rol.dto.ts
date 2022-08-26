import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUppercase } from 'class-validator';

export class CreateRolDto {
  @ApiProperty()
  @IsUppercase({ message: 'El nombre debe estar en mayúsculas' })
  name: string;

  @ApiProperty()
  @IsOptional()
  active?: boolean;
}
