import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean | null;

  @ApiProperty()
  @IsString({ message: 'El dato debe ser un string' })
  @IsOptional()
  token?: string | null;

  @ApiProperty()
  @IsString({ message: 'El dato debe ser un string' })
  @IsOptional()
  expire_in?: string | null;

  @ApiProperty()
  @IsUUID()
  user_id: string;
}
