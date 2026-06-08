import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authConfig } from '../config/auth.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: authConfig.DB_BASE,
      username: authConfig.DB_USER,
      password: authConfig.DB_PASS,
      port: authConfig.DB_PORT,
      host: authConfig.DB_HOST,
      synchronize: 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AuthModule {}
