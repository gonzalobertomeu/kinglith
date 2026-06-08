import { HashService } from '../../domain/services/Hash.service';
import argon from 'argon2';

export class HashArgonService extends HashService {
  async hash(plain: string): Promise<string> {
    console.log('hashing');
    return await argon.hash(plain);
  }
  async compare(plain: string, hashed: string): Promise<boolean> {
    return await argon.verify(hashed, plain);
  }
}
