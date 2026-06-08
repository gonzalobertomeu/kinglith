import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../models/User.model';
import { Repository } from 'typeorm';
import { UserRepository } from '@kinglith/auth/logic/domain/repositories/User.repository';
import { User } from '@kinglith/auth/logic/domain/entities/User.entity';
import { UserMapper } from '../mappers/User.mapper';

@Injectable()
export class UserRepositorySQL implements UserRepository {
  public constructor(
    @InjectRepository(UserModel) private userRepo: Repository<UserModel>,
  ) {}
  public async findById(id: string) {
    const userModel = await this.userRepo.findOneBy({ id });
    return userModel ? UserMapper.toDomain(userModel) : null;
  }
  public async save(domain: User): Promise<void> {
    await this.userRepo.save(UserMapper.toOrm(domain));
  }
  public async delete(id: string): Promise<void> {
    await this.userRepo.update({ id }, { isActive: false });
  }
  public async findByEmail(email: string): Promise<User | null> {
    const userModel = await this.userRepo.findOneBy({ email });
    return userModel ? UserMapper.toDomain(userModel) : null;
  }
}
