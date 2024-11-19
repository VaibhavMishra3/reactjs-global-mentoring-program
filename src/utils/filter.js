import {
  DEFAULT_SEARCH, DEFAULT_GENRES, DEFAULT_SORT,
} from '../constants/data.js';

export const createFilter = (query) => {
  return {
    search: query?.search || DEFAULT_SEARCH,
    genres: query?.genres ? (Array.isArray(query.genres) ? query.genres : [query.genres]) : DEFAULT_GENRES,
    sort: query?.sort || DEFAULT_SORT
  }
};
