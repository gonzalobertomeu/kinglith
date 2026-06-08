import { HashService } from '../../domain/services/Hash.service';
import { HashArgonService } from './HashArgon2.service';

export const services = [
  {
    provide: HashService,
    useClass: HashArgonService,
  },
];
