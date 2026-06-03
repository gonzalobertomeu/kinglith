import { NestFactory } from '@nestjs/core';
import { AuthModule } from './logic/infrastructure/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch(console.error);
