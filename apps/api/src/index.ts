import Fastify from 'fastify';
import { config } from './config.js';
import { logger } from './logger.js';
import { errorHandler } from './error-handler.js';

const app = Fastify({
  logger: false, // we use our own pino instance
});

// Error handler
app.setErrorHandler(errorHandler);

// Health check
app.get('/health', async (_request, _reply) => {
  return {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };
});

// Start server
async function start() {
  try {
    await app.listen({ port: config.port, host: config.host });
    logger.info({ port: config.port, host: config.host }, 'Server started');
  } catch (err) {
    logger.error({ err }, 'Failed to start server');
    process.exit(1);
  }
}

start();

export { app };