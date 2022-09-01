import { PartialType } from '@nestjs/swagger';
import { CreateImagingDetailDto } from './create-imaging-detail.dto';

export class UpdateImagingDetailDto extends PartialType(CreateImagingDetailDto) {}
