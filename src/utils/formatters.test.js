import { formatGenres, formatYear, formatRuntime } from './formatters.js';

describe('formatters', () => {

  it('should format genres', () => {
    expect(formatGenres([])).toBe('');
    expect(formatGenres(['Action'])).toBe('Action');
    expect(formatGenres(['Action', 'Adventure'])).toBe('Action, Adventure');
  });

  it('should format year', () => {
    expect(formatYear(new Date(2023, 1, 1))).toBe(2023);
  });

  it('should format runtime', () => {
    expect(formatRuntime(0)).toBe('0h 0min');
    expect(formatRuntime(123)).toBe('2h 3min');
  });

});
