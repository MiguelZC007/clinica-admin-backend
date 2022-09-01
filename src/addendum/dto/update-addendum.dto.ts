import { PartialType } from '@nestjs/swagger';
import { CreateAddendumDto } from './create-addendum.dto';

export class UpdateAddendumDto extends PartialType(CreateAddendumDto) {}
