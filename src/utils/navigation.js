export const navigationByParams = (pathname, search, genres, sort) => {
  let query = {};

  if (search) {
    query.search = search;
  }
  if (genres) {
    query.genres = genres;
  }
  if (sort) {
    query.sort = sort;
  }

  return {
    pathname: pathname,
    query: query
  }
};

export const navigationByFilter = (pathname, filter) =>
  navigationByParams(pathname, filter.search, filter.genres, filter.sort);
