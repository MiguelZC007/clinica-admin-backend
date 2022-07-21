import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty()
  public state?: boolean | null;
  @ApiProperty()
  public token?: string | null;
  @ApiProperty()
  public expire_in?: string | null;
  @ApiProperty()
  public user_id: string;
}
