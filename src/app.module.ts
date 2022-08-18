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
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';
import { PaymentModule } from './payment/payment.module';
import { MachineModule } from './machine/machine.module';
import { TurnMachineModule } from './turn-machine/turn-machine.module';
import { TurnModule } from './turn/turn.module';
import { HemodialysisModule } from './hemodialysis/hemodialysis.module';
import { HemodialysisMachineModule } from './hemodialysis-machine/hemodialysis-machine.module';
import { HemodialysisSessionModule } from './hemodialysis-session/hemodialysis-session.module';
import { FilesModule } from './files/files.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    SessionModule,
    UserRolModule,
    RolModule,
    MeetModule,
    SpecialtyModule,
    ProductModule,
    CategoryModule,
    ReferenceValueModule,
    AnalysisModule,
    CategoryAnalysisModule,
    SaleModule,
    SaleDetailModule,
    PaymentModule,
    MachineModule,
    TurnMachineModule,
    TurnModule,
    HemodialysisModule,
    HemodialysisMachineModule,
    HemodialysisSessionModule,
    FilesModule,
  ],
})
export class AppModule {}
