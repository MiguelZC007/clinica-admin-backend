-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "StateMeet" AS ENUM ('RESERVADO', 'ATENDIDO', 'AUSENTE', 'REPROGRAMADO', 'ELIMINADO', 'SIGNOS_VITALES');

-- CreateEnum
CREATE TYPE "StateSale" AS ENUM ('PAGADO', 'NO_PAGADO', 'CREDITO', 'ELIMINADO', 'ANULADO', 'DEVOLUCION');

-- CreateEnum
CREATE TYPE "TypePayment" AS ENUM ('EFECTIVO', 'TRANSFERENCIA', 'ANULADO', 'DEVOLUCION');

-- CreateEnum
CREATE TYPE "MedicalHistoryType" AS ENUM ('CONSULTA', 'SEGUIMIENTO', 'EPICRISIS', 'EVOLUCION');

-- CreateEnum
CREATE TYPE "SampleType" AS ENUM ('ENTREGADO', 'PENDIENTE', 'PROCESO', 'TERMINADO', 'ANULADO');

-- CreateEnum
CREATE TYPE "ImagingType" AS ENUM ('PENDIENTE', 'TERMINADO', 'ANULADO');

-- CreateEnum
CREATE TYPE "LaboratoryType" AS ENUM ('RECEPCION', 'PROCESO', 'TERMINADO', 'ANULADO', 'EMERGENCIA');

-- CreateEnum
CREATE TYPE "PhysicalExamType" AS ENUM ('CONSTITUCIONAL', 'OJOS', 'BUCOFARINGEO', 'CUELLO', 'CARDIOVASCULAR', 'PULMONAR', 'ABDOMEN', 'GENITOURINARIO', 'EXTREMIDADES', 'PIEL', 'NEUROLOGICO');

-- CreateEnum
CREATE TYPE "PatientType" AS ENUM ('INTERNO', 'EXTERNO');

-- CreateEnum
CREATE TYPE "ReferenceValueType" AS ENUM ('REACTIVO', 'CONTEO', 'OTRO');

-- CreateEnum
CREATE TYPE "StateMachine" AS ENUM ('LIBRE', 'OCUPADO');

-- CreateEnum
CREATE TYPE "VascularAccessType" AS ENUM ('CATETER', 'FISTULA');

-- CreateEnum
CREATE TYPE "TypeHemodialysis" AS ENUM ('CONVENIO', 'EXTRA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,
    "mother_lastname" TEXT,
    "search" TEXT,
    "birthdate" TIMESTAMP(3),
    "cellphone" TEXT,
    "ci" TEXT,
    "gender" "Gender",
    "address" TEXT,
    "zone" TEXT,
    "state" TEXT,
    "city" TEXT,
    "country" TEXT,
    "email" TEXT,
    "password" TEXT,
    "contact_name" TEXT,
    "contact_phone" TEXT,
    "relationship" TEXT,
    "odoo_user_id" INTEGER,
    "registration_age" TEXT,
    "observations" TEXT,
    "about_us" TEXT,
    "is_black" BOOLEAN DEFAULT false,
    "hemodialysis" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRol" (
    "id" TEXT NOT NULL,
    "rol_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "state" BOOLEAN DEFAULT true,
    "token" TEXT,
    "expire_in" TEXT,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meet" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "state" "StateMeet" DEFAULT 'RESERVADO',
    "reminder" JSONB DEFAULT '{"hour2": false, "hour24": false}',
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "specialty_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingHour" (
    "id" TEXT NOT NULL,
    "business_hour" JSONB DEFAULT '[{"to": "2000-09-01T20:00:00.000Z", "day": "Domingo", "from": "2000-09-01T12:00:00.000Z", "state": false, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Lunes", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Martes", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Miercoles", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Jueves", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Viernes", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}, {"to": "2000-09-01T20:00:00.000Z", "day": "Sabado", "from": "2000-09-01T12:00:00.000Z", "state": true, "endBreak": "2000-09-01T17:00:00.000Z", "initBreak": "2000-09-01T16:00:00.000Z", "continuous_time": true}]',
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayOff" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "description" TEXT,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayOff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "total_price" DECIMAL(65,30) DEFAULT 0.0,
    "state" "StateSale" DEFAULT 'NO_PAGADO',
    "description" TEXT DEFAULT '',
    "receipt_number" SERIAL,
    "odoo_sale_id" INTEGER,
    "patient_id" TEXT NOT NULL,
    "cashier_id" TEXT NOT NULL,
    "delete_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "transfer" DECIMAL(65,30) DEFAULT 0.0,
    "update_id" TEXT,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) DEFAULT 0.0,
    "residue" DECIMAL(65,30),
    "sale_id" TEXT,
    "cashier_id" TEXT,
    "patient_id" TEXT,
    "type" "TypePayment" DEFAULT 'EFECTIVO',
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleDetail" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER DEFAULT 1,
    "sale_price" DECIMAL(65,30) DEFAULT 0.0,
    "discount" DECIMAL(65,30) DEFAULT 0.0,
    "invoiced" BOOLEAN DEFAULT false,
    "name" TEXT,
    "odoo_sale_line_id" INTEGER,
    "product_id" TEXT NOT NULL,
    "sale_id" TEXT NOT NULL,
    "meet_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SaleDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) DEFAULT 0.0,
    "state" BOOLEAN DEFAULT true,
    "description" TEXT,
    "programmable" BOOLEAN DEFAULT false,
    "sub_category" TEXT,
    "odoo_product_id" INTEGER,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateProduct" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "laboratory_template_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaboratoryTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaboratoryTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorSpecialty" (
    "id" TEXT NOT NULL,
    "specialty_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorSpecialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssignedDoctors" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "medical_history_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,

    CONSTRAINT "AssignedDoctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "id" TEXT NOT NULL,
    "paternal_family_record" JSONB,
    "maternal_family_record" JSONB,
    "surgical_record" TEXT,
    "laboratory_record" TEXT,
    "medicines" TEXT,
    "social_record" TEXT,
    "smokes" TEXT,
    "is_smokes" BOOLEAN DEFAULT false,
    "allergies" JSONB,
    "blood_type" TEXT,
    "state" BOOLEAN DEFAULT true,
    "patient_type" "PatientType" DEFAULT 'EXTERNO',
    "patient_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hemodialysis" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "vascular_access" "VascularAccessType" DEFAULT 'CATETER',
    "history_number" SERIAL NOT NULL,
    "regisration_date" TIMESTAMP(3),
    "diagnostic" TEXT,
    "pathologies" TEXT,
    "deceased" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hemodialysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HemodialysisSession" (
    "id" TEXT NOT NULL,
    "hemodialysis_id" TEXT NOT NULL,
    "number_session" TEXT NOT NULL,
    "dry_weight" DECIMAL(65,30) DEFAULT 0.0,
    "income_weight" DECIMAL(65,30) DEFAULT 0.0,
    "egress_weight" DECIMAL(65,30) DEFAULT 0.0,
    "number_machine" INTEGER NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL,
    "check_out" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ultrafiltration_session" TEXT NOT NULL,
    "ultrafiltration_end" TEXT NOT NULL,
    "filter_type" TEXT NOT NULL DEFAULT 'Alto Flujo',
    "filter_reuse" TEXT NOT NULL,
    "line_reuse" TEXT NOT NULL,
    "heparin" TEXT NOT NULL,
    "ktv" TEXT NOT NULL,
    "ingest" TEXT NOT NULL DEFAULT 'N/A',
    "oxygenation" INTEGER NOT NULL,
    "pa_entry" TEXT NOT NULL,
    "vascular_access" "VascularAccessType" NOT NULL,
    "nursing_evaluation" TEXT,
    "clinic_evaluation" TEXT,
    "treatment" TEXT,
    "type_hemodialysis" "TypeHemodialysis" NOT NULL DEFAULT 'CONVENIO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HemodialysisSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSignsHemodialysis" (
    "id" TEXT NOT NULL,
    "hemodialysis_session_id" TEXT NOT NULL,
    "hour" INTEGER NOT NULL,
    "pa" TEXT NOT NULL,
    "fc" INTEGER NOT NULL,
    "temp" DECIMAL(65,30) NOT NULL,
    "blood_flow" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "ptm" INTEGER NOT NULL,
    "conductivity" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VitalSignsHemodialysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "ext" TEXT,
    "url" TEXT,
    "description" TEXT,
    "name" TEXT,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hemodialysis_id" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HemodialysisMachine" (
    "id" TEXT NOT NULL,
    "hemodialysis_id" TEXT NOT NULL,
    "turn_machine_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HemodialysisMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turn" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "days" JSONB NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL,
    "check_out" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Turn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TurnMachine" (
    "id" TEXT NOT NULL,
    "turn_id" TEXT NOT NULL,
    "machine_id" TEXT NOT NULL,
    "state" "StateMachine" NOT NULL DEFAULT 'LIBRE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TurnMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" TEXT NOT NULL,
    "number_machine" SERIAL NOT NULL,
    "description" TEXT,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordUnderlyingDisease" (
    "id" TEXT NOT NULL,
    "disease" TEXT,
    "icd_id" TEXT,
    "medical_history_id" TEXT,
    "medical_history_detail_id" TEXT,
    "diagnostic_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordUnderlyingDisease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalHistoryDetail" (
    "id" TEXT NOT NULL,
    "medical_history_type" "MedicalHistoryType" DEFAULT 'CONSULTA',
    "history_detail_number" SERIAL,
    "symptoms" TEXT,
    "prescription" TEXT,
    "specialty_id" TEXT,
    "meet_id" TEXT,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "approve" BOOLEAN NOT NULL DEFAULT false,
    "user_approve_id" TEXT,
    "assigned_doctor_id" TEXT NOT NULL,
    "medical_history_id" TEXT NOT NULL,
    "user_created_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalHistoryDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnostic" (
    "id" TEXT NOT NULL,
    "icd_id" TEXT,
    "name" TEXT,
    "add_to_record" BOOLEAN DEFAULT true,
    "description" TEXT,
    "medical_history_detail_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diagnostic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Icd" (
    "id" TEXT NOT NULL,
    "disease" TEXT NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Icd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VitalSigns" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "oxygen_saturation" TEXT,
    "temperature" TEXT,
    "heart_rate" TEXT,
    "breathing_frequency" TEXT,
    "weight" TEXT,
    "height" TEXT,
    "diastolic_pressure" TEXT,
    "systolic_pressure" TEXT,
    "mdrd" JSONB,
    "medical_history_detail_id" TEXT NOT NULL,
    "user_created_id" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "approve" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VitalSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Addendum" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "medical_history_detail_id" TEXT,
    "user_created_id" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vital_signs_id" TEXT,

    CONSTRAINT "Addendum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "duration" TEXT,
    "description" TEXT,
    "frequency" TEXT,
    "medicine" TEXT,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "medical_history_detail_id" TEXT NOT NULL,
    "user_created_id" TEXT NOT NULL,
    "hemodialysis_session_id" TEXT,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhysicalExam" (
    "id" TEXT NOT NULL,
    "normal" BOOLEAN DEFAULT true,
    "description" TEXT,
    "medical_history_detail_id" TEXT NOT NULL,
    "user_created_id" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "physical_exam_type" "PhysicalExamType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhysicalExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laboratory" (
    "id" TEXT NOT NULL,
    "laboratory_number" SERIAL,
    "patient_id" TEXT NOT NULL,
    "medical_history_detail_id" TEXT,
    "sale_id" TEXT,
    "description" TEXT,
    "observation" TEXT,
    "type" "LaboratoryType" NOT NULL DEFAULT 'RECEPCION',
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hemodialysis_session_id" TEXT,

    CONSTRAINT "Laboratory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sample" (
    "id" TEXT NOT NULL,
    "laboratory_id" TEXT NOT NULL,
    "name" TEXT,
    "type" "SampleType" DEFAULT 'PENDIENTE',
    "state" BOOLEAN NOT NULL DEFAULT true,
    "product_id" TEXT NOT NULL,
    "sale_detail_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SampleResult" (
    "id" TEXT NOT NULL,
    "sample_id" TEXT NOT NULL,
    "name" TEXT,
    "attached" JSONB,
    "danger" BOOLEAN DEFAULT false,
    "result" TEXT,
    "within_range" TEXT,
    "out_of_range" TEXT,
    "type" "SampleType" DEFAULT 'PENDIENTE',
    "state" BOOLEAN NOT NULL DEFAULT true,
    "value_reference" TEXT,
    "reference_value_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "analysis_id" TEXT NOT NULL,

    CONSTRAINT "SampleResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analysis" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT,
    "order" INTEGER,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category_id" TEXT NOT NULL,
    "reference_value_id" TEXT,
    "parent_id" TEXT,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryAnalysis" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "order" INTEGER,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReferenceValue" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "value_reference" TEXT,
    "unit_measurement" TEXT,
    "maker" TEXT,
    "type" "ReferenceValueType" DEFAULT 'REACTIVO',
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReferenceValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imaging" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT,
    "sale_id" TEXT,
    "medical_history_detail_id" TEXT,
    "type" "ImagingType" DEFAULT 'PENDIENTE',
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Imaging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagingDetail" (
    "id" TEXT NOT NULL,
    "product_id" TEXT,
    "imaging_id" TEXT,
    "name" TEXT,
    "description" TEXT,
    "type" "ImagingType" DEFAULT 'PENDIENTE',
    "sale_detail_id" TEXT,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImagingDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagingFiles" (
    "id" TEXT NOT NULL,
    "imaging_detail_id" TEXT,
    "file" TEXT,
    "ext" TEXT,
    "url" TEXT,
    "description" TEXT,
    "state" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImagingFiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ci_key" ON "User"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rol_name_key" ON "Rol"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WorkingHour_user_id_key" ON "WorkingHour"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "SaleDetail_meet_id_key" ON "SaleDetail"("meet_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LaboratoryTemplate_name_key" ON "LaboratoryTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_name_key" ON "Specialty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalHistory_patient_id_key" ON "MedicalHistory"("patient_id");

-- CreateIndex
CREATE UNIQUE INDEX "Hemodialysis_patient_id_key" ON "Hemodialysis"("patient_id");

-- CreateIndex
CREATE UNIQUE INDEX "HemodialysisMachine_hemodialysis_id_key" ON "HemodialysisMachine"("hemodialysis_id");

-- CreateIndex
CREATE UNIQUE INDEX "Turn_name_key" ON "Turn"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RecordUnderlyingDisease_diagnostic_id_key" ON "RecordUnderlyingDisease"("diagnostic_id");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalHistoryDetail_meet_id_key" ON "MedicalHistoryDetail"("meet_id");

-- CreateIndex
CREATE UNIQUE INDEX "Icd_disease_key" ON "Icd"("disease");

-- CreateIndex
CREATE UNIQUE INDEX "VitalSigns_medical_history_detail_id_key" ON "VitalSigns"("medical_history_detail_id");

-- CreateIndex
CREATE UNIQUE INDEX "Laboratory_sale_id_key" ON "Laboratory"("sale_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryAnalysis_name_key" ON "CategoryAnalysis"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ReferenceValue_name_key" ON "ReferenceValue"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Imaging_sale_id_key" ON "Imaging"("sale_id");

-- CreateIndex
CREATE UNIQUE INDEX "ImagingDetail_sale_detail_id_key" ON "ImagingDetail"("sale_detail_id");

-- AddForeignKey
ALTER TABLE "UserRol" ADD CONSTRAINT "UserRol_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRol" ADD CONSTRAINT "UserRol_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "Specialty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingHour" ADD CONSTRAINT "WorkingHour_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayOff" ADD CONSTRAINT "DayOff_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_cashier_id_fkey" FOREIGN KEY ("cashier_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_delete_id_fkey" FOREIGN KEY ("delete_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_update_id_fkey" FOREIGN KEY ("update_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cashier_id_fkey" FOREIGN KEY ("cashier_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_meet_id_fkey" FOREIGN KEY ("meet_id") REFERENCES "Meet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateProduct" ADD CONSTRAINT "TemplateProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateProduct" ADD CONSTRAINT "TemplateProduct_laboratory_template_id_fkey" FOREIGN KEY ("laboratory_template_id") REFERENCES "LaboratoryTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSpecialty" ADD CONSTRAINT "DoctorSpecialty_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSpecialty" ADD CONSTRAINT "DoctorSpecialty_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "Specialty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedDoctors" ADD CONSTRAINT "AssignedDoctors_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedDoctors" ADD CONSTRAINT "AssignedDoctors_medical_history_id_fkey" FOREIGN KEY ("medical_history_id") REFERENCES "MedicalHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hemodialysis" ADD CONSTRAINT "Hemodialysis_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HemodialysisSession" ADD CONSTRAINT "HemodialysisSession_hemodialysis_id_fkey" FOREIGN KEY ("hemodialysis_id") REFERENCES "Hemodialysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalSignsHemodialysis" ADD CONSTRAINT "VitalSignsHemodialysis_hemodialysis_session_id_fkey" FOREIGN KEY ("hemodialysis_session_id") REFERENCES "HemodialysisSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_hemodialysis_id_fkey" FOREIGN KEY ("hemodialysis_id") REFERENCES "Hemodialysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HemodialysisMachine" ADD CONSTRAINT "HemodialysisMachine_hemodialysis_id_fkey" FOREIGN KEY ("hemodialysis_id") REFERENCES "Hemodialysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HemodialysisMachine" ADD CONSTRAINT "HemodialysisMachine_turn_machine_id_fkey" FOREIGN KEY ("turn_machine_id") REFERENCES "TurnMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurnMachine" ADD CONSTRAINT "TurnMachine_turn_id_fkey" FOREIGN KEY ("turn_id") REFERENCES "Turn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurnMachine" ADD CONSTRAINT "TurnMachine_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordUnderlyingDisease" ADD CONSTRAINT "RecordUnderlyingDisease_icd_id_fkey" FOREIGN KEY ("icd_id") REFERENCES "Icd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordUnderlyingDisease" ADD CONSTRAINT "RecordUnderlyingDisease_medical_history_id_fkey" FOREIGN KEY ("medical_history_id") REFERENCES "MedicalHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordUnderlyingDisease" ADD CONSTRAINT "RecordUnderlyingDisease_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordUnderlyingDisease" ADD CONSTRAINT "RecordUnderlyingDisease_diagnostic_id_fkey" FOREIGN KEY ("diagnostic_id") REFERENCES "Diagnostic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "Specialty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_meet_id_fkey" FOREIGN KEY ("meet_id") REFERENCES "Meet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_user_approve_id_fkey" FOREIGN KEY ("user_approve_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_assigned_doctor_id_fkey" FOREIGN KEY ("assigned_doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_medical_history_id_fkey" FOREIGN KEY ("medical_history_id") REFERENCES "MedicalHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDetail" ADD CONSTRAINT "MedicalHistoryDetail_user_created_id_fkey" FOREIGN KEY ("user_created_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_icd_id_fkey" FOREIGN KEY ("icd_id") REFERENCES "Icd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalSigns" ADD CONSTRAINT "VitalSigns_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalSigns" ADD CONSTRAINT "VitalSigns_user_created_id_fkey" FOREIGN KEY ("user_created_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addendum" ADD CONSTRAINT "Addendum_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addendum" ADD CONSTRAINT "Addendum_user_created_id_fkey" FOREIGN KEY ("user_created_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addendum" ADD CONSTRAINT "Addendum_vital_signs_id_fkey" FOREIGN KEY ("vital_signs_id") REFERENCES "VitalSigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_user_created_id_fkey" FOREIGN KEY ("user_created_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_hemodialysis_session_id_fkey" FOREIGN KEY ("hemodialysis_session_id") REFERENCES "HemodialysisSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhysicalExam" ADD CONSTRAINT "PhysicalExam_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhysicalExam" ADD CONSTRAINT "PhysicalExam_user_created_id_fkey" FOREIGN KEY ("user_created_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_hemodialysis_session_id_fkey" FOREIGN KEY ("hemodialysis_session_id") REFERENCES "HemodialysisSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_laboratory_id_fkey" FOREIGN KEY ("laboratory_id") REFERENCES "Laboratory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sample" ADD CONSTRAINT "Sample_sale_detail_id_fkey" FOREIGN KEY ("sale_detail_id") REFERENCES "SaleDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SampleResult" ADD CONSTRAINT "SampleResult_sample_id_fkey" FOREIGN KEY ("sample_id") REFERENCES "Sample"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SampleResult" ADD CONSTRAINT "SampleResult_reference_value_id_fkey" FOREIGN KEY ("reference_value_id") REFERENCES "ReferenceValue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SampleResult" ADD CONSTRAINT "SampleResult_analysis_id_fkey" FOREIGN KEY ("analysis_id") REFERENCES "Analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CategoryAnalysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_reference_value_id_fkey" FOREIGN KEY ("reference_value_id") REFERENCES "ReferenceValue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Analysis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imaging" ADD CONSTRAINT "Imaging_medical_history_detail_id_fkey" FOREIGN KEY ("medical_history_detail_id") REFERENCES "MedicalHistoryDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imaging" ADD CONSTRAINT "Imaging_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imaging" ADD CONSTRAINT "Imaging_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imaging" ADD CONSTRAINT "Imaging_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingDetail" ADD CONSTRAINT "ImagingDetail_imaging_id_fkey" FOREIGN KEY ("imaging_id") REFERENCES "Imaging"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingDetail" ADD CONSTRAINT "ImagingDetail_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingDetail" ADD CONSTRAINT "ImagingDetail_sale_detail_id_fkey" FOREIGN KEY ("sale_detail_id") REFERENCES "SaleDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingFiles" ADD CONSTRAINT "ImagingFiles_imaging_detail_id_fkey" FOREIGN KEY ("imaging_detail_id") REFERENCES "ImagingDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
