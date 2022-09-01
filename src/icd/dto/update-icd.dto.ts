import { PartialType } from '@nestjs/swagger';
import { CreateIcdDto } from './create-icd.dto';

export class UpdateIcdDto extends PartialType(CreateIcdDto) {}
