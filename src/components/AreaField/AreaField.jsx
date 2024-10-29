import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Col } from 'react-bootstrap';

const AreaField = ({
  label,
  name,
  placeholder
}) => {
  return (
    <Col>
      <label className='form-label'>{label}</label>
      <Field
        as='textarea'
        name={name}
        placeholder={placeholder}
        className='form-control'
      />
      <ErrorMessage data-testid={`error-${name}`} name={name} component='div' />
    </Col>
  )
}

AreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default AreaField;
