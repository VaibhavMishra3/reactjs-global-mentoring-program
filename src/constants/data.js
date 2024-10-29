export const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Crime',
  'Fantasy',
  'History',
  'Science Fiction',
  'Thriller',
  'Western'
];

export const SORT_OPTIONS = [
  {
    name: 'Title',
    value: 'title'
  },
  {
    name: 'Release date',
    value: 'release_date'
  }
];

export const DEFAULT_SEARCH = '';
export const DEFAULT_GENRES = [];
export const DEFAULT_SORT = SORT_OPTIONS[0].value;

export const SEARCH_QUERY_PARAM = 'search';
export const GENRES_QUERY_PARAM = 'genres';
export const SORT_QUERY_PARAM = 'sort';
