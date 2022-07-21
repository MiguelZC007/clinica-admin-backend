import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  public name?: string | null;
  @ApiProperty()
  public lastname?: string | null;
  @ApiProperty()
  public mother_lastname?: string | null;
  @ApiProperty()
  public birthdate?: string | null;
  @ApiProperty()
  public cellphone?: string | null;
  @ApiProperty()
  public ci?: string | null;
  @ApiProperty()
  public gender?: string | null;
  @ApiProperty()
  public address?: string | null;
  @ApiProperty()
  public zone?: string | null;
  @ApiProperty()
  public state?: string | null;
  @ApiProperty()
  public city?: string | null;
  @ApiProperty()
  public country?: string | null;
  @ApiProperty()
  public email?: string | null;
  @ApiProperty()
  public password?: string | null;
  @ApiProperty()
  public contact_name?: string | null;
  @ApiProperty()
  public contact_phone?: string | null;
  @ApiProperty()
  public relationship?: string | null;
  @ApiProperty()
  public registration_age?: string | null;
  @ApiProperty()
  public observations?: string | null;
  @ApiProperty()
  public about_us?: string | null;
  @ApiProperty()
  public is_black?: boolean | null;
  @ApiProperty()
  public hemodialysis?: boolean | null;
  @ApiProperty()
  public active?: boolean | null;
}
