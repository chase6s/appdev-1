import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

interface Config {
  port: number;
  host: string;
  logLevel: string;
  nodeEnv: string;
}

function loadConfig(): Config {
  return {
    port: parseInt(process.env['PORT'] ?? '3000', 10),
    host: process.env['HOST'] ?? '0.0.0.0',
    logLevel: process.env['LOG_LEVEL'] ?? 'info',
    nodeEnv: process.env['NODE_ENV'] ?? 'development',
  };
}

export const config = loadConfig();