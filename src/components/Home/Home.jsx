import React from 'react';
import { useRouter } from 'next/router';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieCounter from '../MovieCounter/MovieCounter';
import MovieListPage from '../MovieListPage/MovieListPage';
import { GENRES, SORT_OPTIONS } from '../../constants/data.js';
import { navigationByParams } from '../../utils/navigation.js';

const Home = ({ filter, movies, children }) => {
  const router = useRouter();

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Container>
        {children}
      </Container>
      <Container>
        <Row>
          <Col md={9}>
            <GenreSelect
              genres={GENRES}
              selectedGenres={filter.genres}
              onSelect={(value) => router.push(navigationByParams('/', filter.search, value, filter.sort))}
            />
          </Col>
          <Col md={3}>
            <SortControl
              sortOptions={SORT_OPTIONS}
              defaultSort={filter.sort}
              handleChange={(value) => router.push(navigationByParams('/', filter.search, filter.genres, value))}
            />
          </Col>
        </Row>
        <MovieCounter count={movies.length} />
      </Container>
      <div>
        <MovieListPage filter={filter} movies={movies} />
      </div>
    </ErrorBoundary>
  );
}

export default Home;
