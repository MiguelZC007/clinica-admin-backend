import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class ArchiveService {
  private path = process.env.PATH_URL;
  async fileUpload(data: string, id: string, user: any = null) {
    try {
      if (!fs.existsSync(resolve(this.path))) {
        fs.mkdirSync(resolve(this.path), { recursive: true });
      }
      const doc = data.split(';base64,')[1];
      const ext = data.split(';base64,')[0];
      const uid = uuidv4();
      const buff = Buffer.from(doc, 'base64');
      const carpeta = resolve(this.path, id);
      if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta, { recursive: true });
      }
      const arch = `${uid}.${ext.split('/')[1]}`;
      const name = resolve(carpeta, arch);
      if (user != null) {
        await fs.writeFileSync(
          `${carpeta}/Informacion-De-Usuario.json`,
          JSON.stringify(user),
        );
      }
      await fs.writeFileSync(name, buff);
      return {
        type: ext + ';base64,',
        ext: ext.split('/')[1],
        filename: `${id}/${uid}.${ext.split('/')[1]}`,
      };
    } catch (e) {
      return null;
    }
  }

  async getFile(filename = '') {
    return new Promise((resolve, reject) => {
      try {
        if (fs.existsSync(path.resolve(this.path, filename))) {
          fs.readFile(
            path.resolve(this.path, filename),
            async (error, data) => {
              if (error) {
                reject({
                  status: HttpStatus.NOT_FOUND,
                  message: `No se pudo obtener el archivo ${filename}`,
                });
              }
              resolve(data.toString('base64'));
            },
          );
        } else {
          reject({
            status: HttpStatus.NOT_FOUND,
            message: `No se pudo obtener el archivo ${filename}`,
          });
        }
      } catch (e) {
        reject({
          ...e,
          message: `No se pudo obtener el archivo ${filename}`,
        });
      }
    });
  }

  async fileDelete(filename: string) {
    try {
      if (filename) {
        if (fs.existsSync(path.resolve(this.path, filename))) {
          fs.readFile(path.resolve(this.path, filename), (error) => {
            if (error) {
              throw new NotFoundException({
                message: `No se pudo obtener el archivo ${filename}`,
              });
            }
            fs.unlinkSync(path.resolve(this.path, filename));
            return { message: 'Eliminado Correctamente' };
          });
        } else {
          throw new NotFoundException({
            message: `No se pudo obtener el archivo ${filename}`,
          });
        }
      }
    } catch (e) {
      throw new NotFoundException({
        message: `No se pudo obtener el archivo ${filename}`,
        ...e,
      });
    }
  }
}

