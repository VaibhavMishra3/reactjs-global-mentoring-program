import { useNavigate, useSearchParams } from 'react-router-dom';

import AddMovieForm from './AddMovieForm';
import { MovieService } from '../../services/MovieService';
import { navigation } from '../../utils/navigation.js';

const AddMovieFormFragment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = async (movie) => {
    const response = await MovieService.addMovie(movie);
    navigate(navigation(`/${response.id}`, searchParams));
  }

  return (
    <AddMovieForm
      handleClose={() => navigate(navigation('/', searchParams))}
      handleSubmit={(movie) => handleSubmit(movie)}
    />
  );
}

export default AddMovieFormFragment;
