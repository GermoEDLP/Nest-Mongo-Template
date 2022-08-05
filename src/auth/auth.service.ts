import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User, 'mongo')
    private readonly usersRepo: Repository<User>,
  ) {}

  async checkUser(accesToken: string): Promise<boolean> {
    // Chequear que el ususario exista
    const users = await this.usersRepo.find({
      where: {
        'medicus.access_token': accesToken,
      },
    });

    const userSearch = users ? users[0] : null;

    if (!userSearch) {
      throw new BadRequestException('Usuario incorrecto');
    }
    // Chequear que no este expirado el token
    const expDate = new Date(userSearch.medicus.expiration_date);

    if (new Date() > expDate) {
      throw new BadRequestException('Token expirado');
    }
    // retornar la respuesta
    return true;
  }

  async validateUser(payload: any) {
    // provisorio
    if (payload.username != 'salesforce')
      throw new BadRequestException('Usuario incorrecto');

    return payload;
  }
}
