import { PartialType } from '@nestjs/swagger';
import { CreateSampleResultDto } from './create-sample-result.dto';

export class UpdateSampleResultDto extends PartialType(CreateSampleResultDto) {}
