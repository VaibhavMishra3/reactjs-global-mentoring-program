import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieCounter from '../MovieCounter/MovieCounter';
import MovieListPage from '../MovieListPage/MovieListPage';
import { MovieService } from '../../services/MovieService';
import {
  GENRES,
  SORT_OPTIONS, DEFAULT_SEARCH, DEFAULT_GENRES, DEFAULT_SORT,
  GENRES_QUERY_PARAM, SEARCH_QUERY_PARAM, SORT_QUERY_PARAM
} from '../../constants/data.js';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key, value) => {
    setSearchParams(params => {
      params.set(key, value);
      return params;
    });
  }

  const getFilter = () => {
    return {
      search: searchParams.get(SEARCH_QUERY_PARAM) || DEFAULT_SEARCH,
      genres: searchParams.get(GENRES_QUERY_PARAM) || DEFAULT_GENRES,
      sort: searchParams.get(SORT_QUERY_PARAM) || DEFAULT_SORT
    }
  }

  const { search, genres, sort } = getFilter();
  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    MovieService.getMovies(getFilter(),
      (response) => {
        setMovies(response);
        setFetching(false);
      },
      (error) => {
        setMovies([]);
        setFetching(false);
        alert('Backend service is unavailable: ' + error);
      }
    );
  }, [search, genres, sort]);

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Container>
        <Outlet />
      </Container>
      <Container>
        <Row>
          <Col md={9}>
            <GenreSelect
              genres={GENRES}
              selectedGenres={genres}
              onSelect={(value) => updateSearchParams(GENRES_QUERY_PARAM, value)}
            />
          </Col>
          <Col md={3}>
            <SortControl
              sortOptions={SORT_OPTIONS}
              defaultSort={sort}
              handleChange={(value) => updateSearchParams(SORT_QUERY_PARAM, value)}
            />
          </Col>
        </Row>
        <MovieCounter count={movies.length} />
      </Container>
      <div>
        {fetching && <span>Fetching movies...</span>}
        {!fetching && <MovieListPage movies={movies} />}
      </div>
    </ErrorBoundary>
  );
}

export default Home;
