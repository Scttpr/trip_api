import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { AppModule } from './app.module';
import { setupSwagger } from "./services/swagger";
import { env, EnvironmentVariablesKeys } from './services/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    windowRl,
    maxRl,
    port,
    title,
    description,
    version,
    nodeEnv
  } = EnvironmentVariablesKeys;

  app.enableCors();
  app.use(helmet());
  app.use(rateLimit({ windowMs: env.get(windowRl), max: env.get(maxRl) }));

  setupSwagger(app, {
    title: env.get(title),
    description: env.get(description),
    version: env.get(version),
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    disableErrorMessages: env.get(nodeEnv) === 'prod', // to disable in prod
  }))

  await app.listen(env.get(port));
}

bootstrap();
