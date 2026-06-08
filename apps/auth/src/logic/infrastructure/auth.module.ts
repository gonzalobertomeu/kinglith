import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './persistence/datasource/datasource.options';
import { models } from './persistence/models.barrel';
import { repositories } from './persistence/repositories.barrel';
import { services } from './services/services.barrel';
import { UserController } from './presenters/http/users.http';
import { usecases } from '../application/usecases.barrel';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([...models]),
  ],
  controllers: [UserController],
  providers: [...repositories, ...services, ...usecases],
})
export class AuthModule {}
