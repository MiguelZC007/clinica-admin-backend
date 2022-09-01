import { PartialType } from '@nestjs/swagger';
import { CreateImagingFileDto } from './create-imaging-file.dto';

export class UpdateImagingFileDto extends PartialType(CreateImagingFileDto) {}
