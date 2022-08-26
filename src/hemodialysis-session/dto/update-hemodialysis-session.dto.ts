import { PartialType } from '@nestjs/swagger';
import { CreateHemodialysisSessionDto } from './create-hemodialysis-session.dto';

export class UpdateHemodialysisSessionDto extends PartialType(
  CreateHemodialysisSessionDto,
) {}
