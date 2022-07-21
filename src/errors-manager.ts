import { ConflictException, NotFoundException } from '@nestjs/common';

export const ErrorsManager = (error) => {
  console.log('error manager', error);
  switch (error.code) {
    case 'P2025': {
      throw new NotFoundException('Registro no existe');
    }
    case 'P2002': {
      throw new ConflictException(
        'Registo ya existe con el atributo ' + error.meta.target,
      );
    }
    default: {
      throw new Error(error.message);
    }
  }
};
