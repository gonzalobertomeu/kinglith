import { User } from '../entities/User.entity';
import { BaseRepository } from './Base.repository';

export abstract class UserRepository extends BaseRepository<User> {
  abstract findByEmail(email: string): Promise<User | null>;
}
