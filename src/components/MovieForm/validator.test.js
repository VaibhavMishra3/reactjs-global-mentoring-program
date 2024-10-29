import { INITIAL_VALUES, validator } from './validator.js';

describe('validator', () => {

  it('should validate required fields', () => {
    const errors = validator(INITIAL_VALUES);

    const message = 'This field is required';

    expect(errors.title).toBe(message);
    expect(errors.release_date).toBe(message);
    expect(errors.poster_path).toBe(message);
    expect(errors.vote_average).toBe(message);
    expect(errors.genres).toBe(message);
    expect(errors.runtime).toBe(message);
    expect(errors.overview).toBe(message);
  });

  it('should validate field vote_average', () => {
    const message = 'This field must be from 0 to 10 inclusive';

    expect(validator({ 'vote_average': '-1' }).vote_average).toBe(message);
    expect(validator({ 'vote_average': '0' }).vote_average).toBe(undefined);
    expect(validator({ 'vote_average': '0.1' }).vote_average).toBe(undefined);
    expect(validator({ 'vote_average': '10' }).vote_average).toBe(undefined);
    expect(validator({ 'vote_average': '11' }).vote_average).toBe(message);
  });

  it('should validate field release_date', () => {
    const message = 'This field must be a YYYY-MM-DD date';

    expect(validator({ 'release_date': 'error' }).release_date).toBe(message);
    expect(validator({ 'release_date': '2001-01-01' }).release_date).toBe(undefined);

    expect(validator({ 'release_date': '2001-00-01' }).release_date).toBe(message);
    expect(validator({ 'release_date': '2001-01-01' }).release_date).toBe(undefined);
    expect(validator({ 'release_date': '2001-12-01' }).release_date).toBe(undefined);
    expect(validator({ 'release_date': '2001-13-01' }).release_date).toBe(message);

    expect(validator({ 'release_date': '2001-01-00' }).release_date).toBe(message);
    expect(validator({ 'release_date': '2001-01-01' }).release_date).toBe(undefined);
    expect(validator({ 'release_date': '2001-01-31' }).release_date).toBe(undefined);
    expect(validator({ 'release_date': '2001-01-32' }).release_date).toBe(message);
  });

  it('should validate field poster_path', () => {
    const message = 'This field must be a valid URL';

    expect(validator({ 'poster_path': 'error' }).poster_path).toBe(message);
    expect(validator({ 'poster_path': 'http://poster' }).poster_path).toBe(undefined);
    expect(validator({ 'poster_path': 'https://poster' }).poster_path).toBe(undefined);
  });

  it('should validate field runtime', () => {
    const message = 'This field must be greater than 0';

    expect(validator({ 'runtime': '-1' }).runtime).toBe(message);
    expect(validator({ 'runtime': '0' }).runtime).toBe(message);
    expect(validator({ 'runtime': '1' }).runtime).toBe(undefined);
  });

});
