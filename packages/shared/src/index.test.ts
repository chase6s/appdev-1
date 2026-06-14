import { describe, it, expect } from 'vitest';

import { isDefined } from './index.js';

describe('isDefined', () => {
  it('returns false for undefined', () => {
    expect(isDefined(undefined)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isDefined(null)).toBe(false);
  });

  it('returns true for a number', () => {
    expect(isDefined(0)).toBe(true);
  });

  it('returns true for an empty string', () => {
    expect(isDefined('')).toBe(true);
  });

  it('returns true for an object', () => {
    expect(isDefined({})).toBe(true);
  });
});