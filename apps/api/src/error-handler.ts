import { type FastifyError, type FastifyReply, type FastifyRequest } from 'fastify';
import { logger } from './logger.js';

export function errorHandler(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply,
): void {
  const statusCode = error.statusCode ?? 500;

  logger.error({ err: error, statusCode }, 'Request failed');

  reply.status(statusCode).send({
    error: error.name,
    message: statusCode >= 500 ? 'Internal server error' : error.message,
    statusCode,
  });
}