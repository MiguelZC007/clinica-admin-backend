import { PartialType } from '@nestjs/swagger';
import { CreateHemodialysisDto } from './create-hemodialysis.dto';

export class UpdateHemodialysisDto extends PartialType(CreateHemodialysisDto) {}
