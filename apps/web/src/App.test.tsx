import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders dashboard by default', () => {
    render(<App />);
    expect(screen.getByText(/Dashboard: Welcome!/i)).toBeInTheDocument();
  });

  it('renders layout shell', () => {
    render(<App />);
    expect(screen.getByText(/App Shell/i)).toBeInTheDocument();
    expect(screen.getByText(/2026 Shipyard Engineering/i)).toBeInTheDocument();
  });
});
