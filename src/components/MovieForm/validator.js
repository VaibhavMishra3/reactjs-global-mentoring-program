import { isNotEmpty, isValidDate, isValidURL } from '../../utils/validators.js';

export const INITIAL_VALUES = {
  'title': '',
  'release_date': '',
  'poster_path': '',
  'vote_average': '',
  'genres': [],
  'runtime': '',
  'overview': ''
};

export const validator = values => {
  const errors = {};

  for (const property in values) {
    if (values[property] === INITIAL_VALUES[property]) {
      errors[property] = 'This field is required';
    }
  }

  if (isNotEmpty(values.vote_average) && (values.vote_average < 0 || values.vote_average > 10)) {
    errors.vote_average = 'This field must be from 0 to 10 inclusive';
  }

  if (isNotEmpty(values.release_date) && !isValidDate(values.release_date)) {
    errors.release_date = 'This field must be a YYYY-MM-DD date';
  }

  if (isNotEmpty(values.poster_path) && !isValidURL(values.poster_path)) {
    errors.poster_path = 'This field must be a valid URL';
  }

  if (isNotEmpty(values.runtime) && values.runtime <= 0) {
    errors.runtime = 'This field must be greater than 0';
  }

  return errors;
};
