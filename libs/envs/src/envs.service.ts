import { z } from 'zod';

export function parseEnv<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
): z.infer<z.ZodObject<T>> {
  const result = schema.safeParse(process.env);

  if (!result.success) {
    const formatted = result.error.issues
      .map((i) => `  - ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(`Invalid environment variables:\n${formatted}`);
  }

  return result.data;
}
