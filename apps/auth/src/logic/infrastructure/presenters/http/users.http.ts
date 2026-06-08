import { CreateUserUseCase } from '@kinglith/auth/logic/application/use-cases/create-user/create-user.usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Controller('users')
export class UserController {
  public constructor(private createUserUseCase: CreateUserUseCase) {}
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const result = await this.createUserUseCase.execute(body);
    return result;
  }
}
