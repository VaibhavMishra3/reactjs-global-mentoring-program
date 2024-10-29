import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Col } from 'react-bootstrap';

const TextField = ({
  type,
  label,
  name,
  placeholder
}) => {
  return (
    <Col>
      <label className='form-label'>{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className='form-control'
      />
      <ErrorMessage data-testid={`error-${name}`} name={name} component='div' />
    </Col>
  )
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextField;
