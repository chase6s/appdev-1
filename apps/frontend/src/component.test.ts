import { describe, it, expect } from 'vitest';
import { renderComponent } from './components/Sample';

describe('Sample Component', () => {
  it('should render correctly', () => {
    const output = renderComponent('World');
    expect(output).toContain('Hello, World!');
  });
});
