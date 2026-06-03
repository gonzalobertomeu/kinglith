import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './persistence/datasource/datasource.options';
import { models } from './persistence/models.barrel';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([...models]),
  ],
  controllers: [],
  providers: [],
})
export class AuthModule {}
