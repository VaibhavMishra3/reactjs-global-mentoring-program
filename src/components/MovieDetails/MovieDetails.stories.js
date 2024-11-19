import MovieDetails from './MovieDetails';
import { MOCK_MOVIES } from '../../tests/mockData.js';

export default {
  component: MovieDetails
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
  },
  parameters: {
  }
};
