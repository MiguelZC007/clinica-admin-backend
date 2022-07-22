import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { UserRolModule } from './user-rol/user-rol.module';
import { RolModule } from './rol/rol.module';
import { MeetModule } from './meet/meet.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ReferenceValueModule } from './reference-value/reference-value.module';
import { AnalysisModule } from './analysis/analysis.module';
import { CategoryAnalysisModule } from './category-analysis/category-analysis.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, UserModule, AuthModule, SessionModule, UserRolModule, RolModule, MeetModule, SpecialtyModule, ProductModule, CategoryModule, ReferenceValueModule, AnalysisModule, CategoryAnalysisModule],
})
export class AppModule {}
