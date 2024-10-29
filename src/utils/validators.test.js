import { isNotEmpty, isValidDate, isValidURL } from './validators.js';

describe('validators', () => {

  it('should validate isNotEmpty', () => {
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty(' ')).toBe(true);
  });

  it('should validate isValidDate', () => {
    expect(isValidDate('error')).toBe(false);
    expect(isValidDate('2001-01-01')).toBe(true);

    expect(isValidDate('2001-00-01')).toBe(false);
    expect(isValidDate('2001-01-01')).toBe(true);
    expect(isValidDate('2001-12-01')).toBe(true);
    expect(isValidDate('2001-13-01')).toBe(false);

    expect(isValidDate('2001-01-00')).toBe(false);
    expect(isValidDate('2001-01-01')).toBe(true);
    expect(isValidDate('2001-01-31')).toBe(true);
    expect(isValidDate('2022-01-32')).toBe(false);
  });

  it('should validate isValidURL', () => {
    expect(isValidURL('error')).toBe(false);
    expect(isValidURL('http://poster')).toBe(true);
    expect(isValidURL('https://poster')).toBe(true);
  });

});
