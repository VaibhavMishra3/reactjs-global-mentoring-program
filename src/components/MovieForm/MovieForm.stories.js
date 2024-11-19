import MovieForm from './MovieForm';
import { MOCK_MOVIES } from '../../tests/mockData.js';

export default {
  component: MovieForm
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
    onSubmit: (event) => console.log('form submitted: ' + JSON.stringify(event))
  },
  parameters: {
  }
};
