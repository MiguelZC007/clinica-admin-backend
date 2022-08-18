import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTurnDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  description?: string | null;
  @ApiProperty()
  days: Array<any>;
  @ApiProperty()
  check_in: Date | string;
  @ApiProperty()
  check_out: Date | string;
  @ApiPropertyOptional()
  active?: boolean | null;
}
