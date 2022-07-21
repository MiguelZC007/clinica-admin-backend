import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  state?: boolean | null;

  @ApiProperty()
  @IsString()
  @IsOptional()
  token?: string | null;

  @ApiProperty()
  @IsString()
  @IsOptional()
  expire_in?: string | null;

  @ApiProperty()
  @IsString()
  user_id: string;
}
