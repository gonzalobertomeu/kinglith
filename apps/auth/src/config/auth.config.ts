import { parseEnv } from '@kinglith/envs';
import z from 'zod';

const schema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5432),
  DB_BASE: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
});

export const authConfig = parseEnv(schema);
export type AuthConfig = typeof authConfig;
