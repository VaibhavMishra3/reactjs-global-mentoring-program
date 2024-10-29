import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';

import EditMovieForm from './EditMovieForm';
import { MovieService } from '../../services/MovieService';
import { navigation } from '../../utils/navigation.js';

const EditMovieFormFragment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const movie = useLoaderData();

  const handleSubmit = async (movie) => {
    const response = await MovieService.editMovie(movie);
    navigate(navigation(`/${response.id}`, searchParams));
  }

  return (
    <EditMovieForm
      movie={movie}
      handleClose={() => navigate(navigation(`/${movie.id}`, searchParams))}
      handleSubmit={(movie) => handleSubmit(movie)}
    />
  );
}

export default EditMovieFormFragment;
