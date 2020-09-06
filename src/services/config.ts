import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

enum EnvVars {
  VERSION = 'VERSION',
  PORT = 'PORT',
  TITLE = 'TITLE',
  DESCRIPTION = 'DESCRIPTION',
  MONGO_URI = 'MONGO_URI',
  MAX_RL = 'MAX_RL',
  WINDOW_RL = "WINDOW_RL",
}

type EnvVar = { [key in EnvVars]?: string }

export const loadServiceConfig = (app: INestApplication): EnvVar => {
  const configService = app.get(ConfigService);
  return Object.keys(EnvVars).reduce((acc, key) => ({ ...acc, [key]: configService.get(key) }), {});
}
