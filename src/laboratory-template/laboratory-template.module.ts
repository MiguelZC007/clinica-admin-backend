import { Module } from '@nestjs/common';
import { LaboratoryTemplateService } from './laboratory-template.service';
import { LaboratoryTemplateController } from './laboratory-template.controller';

@Module({
  controllers: [LaboratoryTemplateController],
  providers: [LaboratoryTemplateService],
  exports: [LaboratoryTemplateService]
})
export class LaboratoryTemplateModule { }
