import { Injectable } from '@nestjs/common';
import { CreaeUserInput } from './create-user.input';
import { UserRepository } from '@kinglith/auth/logic/domain/repositories/User.repository';
import { HashService } from '@kinglith/auth/logic/domain/services/Hash.service';
import { User } from '@kinglith/auth/logic/domain/entities/User.entity';

@Injectable()
export class CreateUserUseCase {
  public constructor(
    private userRepo: UserRepository,
    private hashService: HashService,
  ) {}
  public async execute({ email, password }: CreaeUserInput) {
    const hashedPass = await this.hashService.hash(password);
    const user = User.create(email, hashedPass);
    console.log({ user });
    await this.userRepo.save(user);
    return user;
  }
}
