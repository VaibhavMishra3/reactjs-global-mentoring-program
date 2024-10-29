import EditMovieForm from './EditMovieForm';
import { MOCK_MOVIES } from '../../constants/mockData.js';

export default {
  component: EditMovieForm
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
    handleClose: (event) => console.log('dialog closed'),
    handleSubmit: (event) => console.log('movie edited: ' + JSON.stringify(event))
  },
  parameters: {
  }
};
