import { User } from '../entities/User.entity';

export abstract class UserRepository {
  abstract save(user: User): Promise<User>;
  abstract get(id: string): Promise<User>;
}
