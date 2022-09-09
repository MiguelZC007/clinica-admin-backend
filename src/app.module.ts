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
import { ArchiveModule } from './archive/archive.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { SampleModule } from './sample/sample.module';
import { SampleResultModule } from './sample-result/sample-result.module';
import { WorkingHourModule } from './working-hour/working-hour.module';
import { DayOffModule } from './day-off/day-off.module';
import { TemplateProductModule } from './template-product/template-product.module';
import { LaboratoryTemplateModule } from './laboratory-template/laboratory-template.module';
import { DoctorSpecialtyModule } from './doctor-specialty/doctor-specialty.module';
import { AssignedDoctorsModule } from './assigned-doctors/assigned-doctors.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { VitalSignsHemodialysisModule } from './vital-signs-hemodialysis/vital-signs-hemodialysis.module';
import { RecordUnderlyingDiseaseModule } from './record-underlying-disease/record-underlying-disease.module';
import { MedicalHistoryDetailModule } from './medical-history-detail/medical-history-detail.module';
import { DiagnosticModule } from './diagnostic/diagnostic.module';
import { IcdModule } from './icd/icd.module';
import { VitalSignsModule } from './vital-signs/vital-signs.module';
import { AddendumModule } from './addendum/addendum.module';
import { PhysicalExamModule } from './physical-exam/physical-exam.module';
import { ImagingModule } from './imaging/imaging.module';
import { ImagingDetailModule } from './imaging-detail/imaging-detail.module';
import { ImagingFilesModule } from './imaging-files/imaging-files.module';

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
    ArchiveModule,
    LaboratoryModule,
    SampleModule,
    SampleResultModule,
    WorkingHourModule,
    DayOffModule,
    TemplateProductModule,
    LaboratoryTemplateModule,
    DoctorSpecialtyModule,
    AssignedDoctorsModule,
    MedicalHistoryModule,
    VitalSignsHemodialysisModule,
    RecordUnderlyingDiseaseModule,
    MedicalHistoryDetailModule,
    DiagnosticModule,
    IcdModule,
    VitalSignsModule,
    AddendumModule,
    PhysicalExamModule,
    ImagingModule,
    ImagingDetailModule,
    ImagingFilesModule,
  ],
})
export class AppModule {}
