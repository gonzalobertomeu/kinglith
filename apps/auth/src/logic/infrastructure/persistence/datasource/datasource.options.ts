import { authConfig } from '@kinglith/auth/config/auth.config';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: authConfig.DB_HOST,
  port: authConfig.DB_PORT,
  database: authConfig.DB_BASE,
  username: authConfig.DB_USER,
  password: authConfig.DB_PASS,
  schema: 'auth',
  migrations: ['apps/auth/src/migrations/*.ts'],
  synchronize: false,
};
