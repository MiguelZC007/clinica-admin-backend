'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.seed = void 0;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const client_1 = require('@prisma/client');

const prisma = new client_1.PrismaClient();
const seed = async () => {
  try {
    const data = [
      { name: 'ACIDO FOLICO', quatity: 0 },
      { name: 'ACIDO ACETIL SALICILICO', quatity: 39 },
      { name: 'ATORVASTATINA', quatity: 0 },
      { name: 'AMLODIPINO', quatity: 39 },
      { name: 'CARBONATO DE CALCIO', quatity: 39 },
      { name: 'COLECALCIFEROL (Vit D3)', quatity: 39 },
      { name: 'COMPLEJO B (B1+B6+B12) COMPRIMIDO', quatity: 0 },
      { name: 'COMPLEJO B (B1+B6+B12) INYECTABLE', quatity: 5 },
      { name: 'ENALAPRIL MALEATO', quatity: 0 },
      { name: 'ERITROPOYETINA', quatity: 0 },
      { name: 'HIERRO', quatity: 0 },
      { name: 'HEPARINA SODICA', quatity: 12 },
      { name: 'LOSARTAN', quatity: 39 },
      { name: 'OMEPRAZOL', quatity: 39 },
      { name: 'SOLUCION ACIDA', quatity: 12 },
      { name: 'SOLUCION BASICA', quatity: 12 },
      { name: 'SOLUCION FISIOLOGICA', quatity: 24 },
      { name: 'ACIDO CITRICO', quatity: 12 },
      { name: 'ACIDO PARACETICO', quatity: 0 },
      { name: 'AGUJA PARA FISTULA O CATETER', quatity: 0 },
      { name: 'CLORURO DE BENZALCONIO DG-6', quatity: 12 },
      { name: 'EQUIPO DE VENOCLISIS', quatity: 12 },
      { name: 'GUANTES QUIRURGICOS DESCART', quatity: 36 },
      { name: 'HIPOCLORITO DE SODIO', quatity: 12 },+
      { name: 'JERINGA DESCARTABLE 20ML CON AGUJA No 21G X 11/2', quatity: 24 },
      { name: 'TRANSDUCTOR', quatity: 36 },
      { name: 'YODOPOVIDONA', quatity: 12 },
      { name: 'OTROS INSUMOS', quatity: 0 },
      { name: 'FILTRO DIALIZADOR FRESSENIUS F8', quatity: 1 },
      { name: 'LINEAS A-V', quatity: 1 },
    ];
    const hemo = await prisma.prescriptionHemodialysis.upsert({
      where: {
        name: 'Recibo Recetario Hemodialisis',
      },
      create: {
        name: 'Recibo Recetario Hemodialisis',
        description: 'Recibo Recetario Hemodialisis',
      },
      update: {
        name: 'Recibo Recetario Hemodialisis',
        description: 'Recibo Recetario Hemodialisis',
      },
    });
    for (const dia of data) {
      await prisma.prescription.create({
        data: {
          quantity: dia.quatity,
          name: dia.name,
          prescription_hemodialysis: {
            connect: {
              id: hemo.id,
            },
          },
          user_created: {
            connect: {
              id: '2b783866-8f40-4435-bce2-6288db189f87',
            },
          },
          medicine: {
            connect: {
              common_name: dia.name,
            },
          },
        },
      });
      //   const product = await prisma.product.upsert({
      //     where: {
      //       name: name,
      //     },
      //     create: {
      //       name: name,
      //       description: '',
      //       price: 0,
      //       programmable: false,
      //       category: {
      //         connectOrCreate: {
      //           where: {
      //             name: 'Medicamentos',
      //           },
      //           create: {
      //             name: 'Medicamentos',
      //             description: 'Medicamentos',
      //           },
      //         },
      //       },
      //     },
      //     update: {
      //       name: name,
      //       description: '',
      //       price: 0,
      //       programmable: false,
      //       category: {
      //         connectOrCreate: {
      //           where: {
      //             name: 'Medicamentos',
      //           },
      //           create: {
      //             name: 'Medicamentos',
      //             description: 'Medicamentos',
      //           },
      //         },
      //       },
      //     },
      //   });
      //   let params = {
      //     common_name: name,
      //     recommendations: ['hola'],
      //     formula: '',
      //     conditions_conservation: null,
      //     medicine_concentration: {
      //       connectOrCreate: {
      //         where: {
      //           id: '',
      //         },
      //         create: {
      //           concentration: '5',
      //           unit: 'mg',
      //         },
      //       },
      //     },
      //     maker_medicine: {
      //       connectOrCreate: {
      //         where: {
      //           name: 'BAGO',
      //         },
      //         create: {
      //           name: 'BAGO',
      //           description: 'Empresa de medicamentos',
      //         },
      //       },
      //     },
      //     medicine_generic_name: {
      //       connectOrCreate: {
      //         where: {
      //           name: name,
      //         },
      //         create: {
      //           name: name,
      //           description: 'Medicamento',
      //         },
      //       },
      //     },
      //     pharmaceutical_form: {
      //       connectOrCreate: {
      //         where: {
      //           name: 'COMPRIMIDO',
      //         },
      //         create: {
      //           name: 'COMPRIMIDO',
      //           description: 'Medicamento en forma de comprimido',
      //         },
      //       },
      //     },
      //     product: {
      //       connect: {
      //         id: product.id,
      //       },
      //     },
      //   };
      //   await prisma.medicine.create({
      //     data: params,
      //   });
    }
  } catch (e) {
    console.log('error seed', e);
  } finally {
    console.log('End Seed');
  }
};
exports.seed = seed;
(0, exports.seed)();
//# sourceMappingURL=seed.js.map
