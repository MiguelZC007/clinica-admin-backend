import { PartialType } from '@nestjs/swagger';
import { CreatePhysicalExamDto } from './create-physical-exam.dto';

export class UpdatePhysicalExamDto extends PartialType(CreatePhysicalExamDto) {}
