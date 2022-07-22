import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

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
    case 'P1000': {
      throw new InternalServerErrorException(
        'Error de conexión con la base de datos',
      );
    }
    case 'P2000': {
      throw new BadRequestException(
        'El valor proporcionado para la columna es demasiado largo para el tipo de columna.',
      );
    }

    case 'P2001': {
      throw new NotFoundException('El registro buscado no existe');
    }

    case 'P2003': {
      throw new BadRequestException(
        'La restricción de la Foreign Key no se cumple',
      );
    }

    default: {
      throw new Error(error.message);
    }
  }
};
