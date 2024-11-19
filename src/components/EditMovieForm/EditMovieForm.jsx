import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { movieType } from '../../constants/types.js';

const EditMovieForm = ({ movie, handleClose, handleSubmit }) => {
  const [visibleMovie, setVisibleMovie] = useState(movie);

  return (
    <>
      {visibleMovie && (
        <Dialog
          title={'Edit movie'}
          handleClose={() => { handleClose(); setVisibleMovie(null); }}
        >
          <MovieForm
            movie={visibleMovie}
            onSubmit={(values) => { handleSubmit(values); setVisibleMovie(null); }}
          />
        </Dialog>
      )}
    </>
  );
}

EditMovieForm.propTypes = {
  movie: movieType.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default EditMovieForm;
