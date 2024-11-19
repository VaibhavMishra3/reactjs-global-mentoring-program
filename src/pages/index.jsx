import React from 'react';
import { useRouter } from 'next/router';

import Home from '../components/Home/Home';
import SearchFormFragment from '../components/SearchForm/SearchFormFragment';
import { MovieService } from '../services/MovieService';
import { navigationByParams } from '../utils/navigation.js';
import { createFilter } from '../utils/filter.js';

const IndexPage = ({ filter, movies }) => {
  const router = useRouter();

  return (
    <Home
      filter={filter}
      movies={movies}
      children={
        <SearchFormFragment
          filter={filter}
          search={filter.search}
          handleSearch={(value) => router.push(navigationByParams('/', value, filter.genres, filter.sort))}
        />
      }
    />
  );
}

export async function getServerSideProps(context) {
  const query = { ...context.query };

  const filter = createFilter(query);
  const movies = await MovieService.getMovies(filter);

  return {
    props: {
      filter: filter,
      movies: movies
    }
  };
}

export default IndexPage;
