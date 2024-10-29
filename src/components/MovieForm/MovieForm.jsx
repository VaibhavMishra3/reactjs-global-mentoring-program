import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form } from 'formik';
import { Container, Row, Modal, Button } from 'react-bootstrap';

import AreaField from '../AreaField/AreaField';
import SelectField from '../SelectField/SelectField';
import TextField from '../TextField/TextField';
import { GENRES } from '../../constants/data.js';
import { movieType } from '../../constants/types.js';
import { INITIAL_VALUES, validator } from './validator.js';

const MovieForm = ({ movie, onSubmit }) => {
  return (
    <Formik
      initialValues={movie || INITIAL_VALUES}
      validate={validator}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
      }}
    >
      {({
        isSubmitting
      }) => (
        <Form data-testid={`${movie ? 'edit-movie-form' : 'add-movie-form'}`} noValidate>
          <Modal.Body>
            <Container>
              <Row>
                <TextField
                  type='text'
                  label='Title'
                  name='title'
                  placeholder='Enter title'
                />
                <TextField
                  type='text'
                  label='Release date'
                  name='release_date'
                  placeholder='Enter release date'
                />
              </Row>
              <Row>
                <TextField
                  type='text'
                  label='Movie URL'
                  name='poster_path'
                  placeholder='https://'
                />
                <TextField
                  type='number'
                  label='Rating'
                  name='vote_average'
                  placeholder='7.8'
                />
              </Row>
              <Row>
                <SelectField
                  name='genres'
                  label='Genre'
                  options={GENRES}
                />
                <TextField
                  type='number'
                  label='Runtime'
                  name='runtime'
                  placeholder='minutes'
                />
              </Row>
              <Row>
                <AreaField
                  label='Overview'
                  name='overview'
                  placeholder='Movie description'
                />
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' type='reset'>
              Reset
            </Button>
            <Button variant='primary' type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
}

MovieForm.propTypes = {
  movie: movieType,
  onSubmit: PropTypes.func.isRequired
};

export default MovieForm;
