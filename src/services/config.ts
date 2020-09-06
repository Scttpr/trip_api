import * as nconf from 'nconf';

const CONFIG_FILE_PATH = './config.json';

export const env = nconf.env({ lowerCase: true }).argv().file({ file: CONFIG_FILE_PATH, lowerCase: true });

export enum EnvironmentVariablesKeys {
  nodeEnv = 'node_env',
  version = 'npm_package_version',
  title = 'npm_package_name',
  description = 'npm_package_description',
  author = 'npm_package_author',
  port = 'port',
  mongoUri = 'mongo_uri',
  maxRl = 'max_rl',
  windowRl = "window_rl",
}
