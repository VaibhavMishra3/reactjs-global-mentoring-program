import React from 'react';
import { useRouter } from 'next/router';

import Home from '../../components/Home/Home';
import SearchFormFragment from '../../components/SearchForm/SearchFormFragment';
import AddMovieFormFragment from '../../components/AddMovieForm/AddMovieFormFragment';
import { MovieService } from '../../services/MovieService';
import { navigationByParams } from '../../utils/navigation.js';
import { createFilter } from '../../utils/filter.js';

const AddMoviePage = ({ filter, movies }) => {
  const router = useRouter();

  return (
    <Home
      filter={filter}
      movies={movies}
      children={
        <div>
          <SearchFormFragment
            filter={filter}
            search={filter.search}
            handleSearch={(value) => router.push(navigationByParams('/', value, filter.genres, filter.sort))}
          />
          <AddMovieFormFragment filter={filter} />
        </div>
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

export default AddMoviePage;
