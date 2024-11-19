import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

const AddMovieForm = ({ handleClose, handleSubmit }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <Dialog
          title={'Add movie'}
          handleClose={() => { handleClose(); setVisible(null); }}
        >
          <MovieForm
            onSubmit={(values) => { handleSubmit(values); setVisible(null); }}
          />
        </Dialog>
      )}
    </>
  );
}

AddMovieForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddMovieForm;
