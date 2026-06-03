import { dataSourceOptions } from '@kinglith/auth/logic/infrastructure/persistence/datasource/datasource.options';
import { DataSource } from 'typeorm';

export default new DataSource({
  ...dataSourceOptions,
  entities: ['apps/auth/src/logic/infrastructure/**/*.model.ts'],
});
