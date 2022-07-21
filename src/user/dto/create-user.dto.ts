import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  name?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  lastname?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  mother_lastname?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ message: 'El dato debe ser un ISO string' })
  birthdate?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  cellphone?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  ci?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  gender?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  address?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  zone?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  state?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  city?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  country?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  email?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  password?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  contact_name?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  contact_phone?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  relationship?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  registration_age?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  observations?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'El dato debe ser un string' })
  about_us?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean({ message: 'el dato debe ser falso o verdadero' })
  is_black?: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean({ message: 'el dato debe ser falso o verdadero' })
  hemodialysis?: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsBoolean({ message: 'el dato debe ser falso o verdadero' })
  active?: boolean | null;
}
