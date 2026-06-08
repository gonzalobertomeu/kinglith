import { CreaeUserInput } from '@kinglith/auth/logic/application/use-cases/create-user/create-user.input';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements CreaeUserInput {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
