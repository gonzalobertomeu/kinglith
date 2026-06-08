import { User } from '@kinglith/auth/logic/domain/entities/User.entity';
import { UserModel } from '../models/User.model';

export class UserMapper {
  static toDomain(orm: UserModel): User {
    return User.reconstitute(orm);
  }
  static toOrm(domain: User): UserModel {
    const orm = new UserModel();
    const { id, email, password, isActive, isValidated, createdAt } =
      domain.snapshot;
    orm.id = id;
    orm.email = email;
    orm.password = password;
    orm.isActive = isActive;
    orm.isValidated = isValidated;
    orm.createdAt = createdAt;
    return orm;
  }
}
