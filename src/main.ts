import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { AppModule } from './app.module';
import { setupSwagger } from "./services/swagger";
import { loadServiceConfig } from "./services/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { TITLE, DESCRIPTION, PORT, VERSION, MAX_RL, WINDOW_RL } = loadServiceConfig(app);

  app.enableCors();
  app.use(helmet());
  app.use(rateLimit({ windowMs: WINDOW_RL, max: MAX_RL }));

  setupSwagger(app, {
    title: TITLE,
    desc: DESCRIPTION,
    version: VERSION,
  });

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT);
}

bootstrap();
