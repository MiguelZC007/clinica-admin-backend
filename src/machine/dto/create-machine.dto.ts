import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMachineDto {
  @ApiPropertyOptional()
  number_machine?: number;
  @ApiPropertyOptional()
  description?: string | null;
  @ApiPropertyOptional()
  active?: boolean | null;
}
