import { createFilter } from './filter.js';

describe('filter', () => {

  it('should create default filter', () => {
    expect(createFilter(null))
      .toStrictEqual({ search: '', genres: [], sort: 'title' });
  });

  it('should create filter with one genre', () => {
    expect(createFilter({ search: 'one', genres: 'Action', sort: 'release_date' }))
      .toStrictEqual({ search: 'one', genres: ['Action'], sort: 'release_date' });
  });

  it('should create filter with many genres', () => {
    expect(createFilter({ search: 'one', genres: ['Action', 'Adventure'], sort: 'release_date' }))
      .toStrictEqual({ search: 'one', genres: ['Action', 'Adventure'], sort: 'release_date' });
  });

});
