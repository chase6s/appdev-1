import { describe, it, expect } from 'vitest';
import { checkHealth } from './lib/health';

describe('Health Check', () => {
  it('should return status ok', () => {
    const health = checkHealth();
    expect(health.status).toBe('ok');
    expect(health.uptime).toBeGreaterThan(0);
  });
});
