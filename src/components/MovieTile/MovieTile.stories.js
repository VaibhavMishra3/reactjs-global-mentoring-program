import MovieTile from './MovieTile';
import { MOCK_MOVIES } from '../../constants/mockData.js';

export default {
  component: MovieTile
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
  },
  parameters: {
  }
};
