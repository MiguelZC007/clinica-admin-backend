import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ErrorsManager } from 'src/errors-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LaboratoryTemplateService {
  constructor(private prisma: PrismaService) { }

  async create(params: Prisma.LaboratoryTemplateCreateArgs) {
    try {
      const response: any = await this.prisma.laboratoryTemplate.create(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findMany(params: Prisma.LaboratoryTemplateFindManyArgs) {
    try {
      const response: any = await this.prisma.laboratoryTemplate.findMany(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async findUnique(params: Prisma.LaboratoryTemplateFindUniqueArgs) {
    try {
      const response: any = await this.prisma.laboratoryTemplate.findUnique(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async update(params: Prisma.LaboratoryTemplateUpdateArgs) {
    try {
      const response: any = await this.prisma.laboratoryTemplate.update(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }

  async delete(params: Prisma.LaboratoryTemplateDeleteArgs) {
    try {
      const response: any = await this.prisma.laboratoryTemplate.delete(params);
      return response;
    } catch (e) {
      ErrorsManager(e);
    }
  }
}
