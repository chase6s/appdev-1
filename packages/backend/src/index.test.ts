import { describe, it, expect } from 'vitest';

describe('backend', () => {
  it('exports createSuccessResponse', async () => {
    const { createSuccessResponse } = await import('./index.js');
    const result = createSuccessResponse({ message: 'ok' });
    expect(result.status).toBe(200);
    expect(result.error).toBeNull();
    expect(result.data).toEqual({ message: 'ok' });
  });

  it('exports createErrorResponse', async () => {
    const { createErrorResponse } = await import('./index.js');
    const result = createErrorResponse('not found', 404);
    expect(result.status).toBe(404);
    expect(result.error).toBe('not found');
    expect(result.data).toBeNull();
  });
});