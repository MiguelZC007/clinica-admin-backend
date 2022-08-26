import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export const ErrorsManager = (error) => {
  const flag = error.code != null ? error.code : error.status;
  switch (flag) {
    case 400: {
      throw new BadRequestException({
        message: error.message,
        status: error.status,
        name: error.name,
      });
    }

    case 404: {
      throw new NotFoundException({
        message: error.message,
        status: error.status,
        name: error.name,
      });
    }

    case 409: {
      throw new ConflictException({
        message: error.message,
        status: error.status,
        name: error.name,
      });
    }

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

    case 'P2022': {
      throw new BadRequestException(
        `La columna ${error.meta.column} no existe en la base de datos actual.`,
      );
    }

    default: {
      throw new Error(error.message);
    }
  }
};
