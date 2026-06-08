import { UserRepositorySQL } from './repositories/User.sql';
import { UserRepository } from '../../domain/repositories/User.repository';

export const repositories = [
  {
    provide: UserRepository,
    useClass: UserRepositorySQL,
  },
];
