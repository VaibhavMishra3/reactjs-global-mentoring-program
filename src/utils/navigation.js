import { createSearchParams } from 'react-router-dom';

export const navigation = (pathname, searchParams) => ({
  pathname: pathname,
  search: `?${createSearchParams(searchParams)}`
});
