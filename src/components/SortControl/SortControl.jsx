import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';

const SortControl = ({ sortOptions, defaultSort, handleChange }) => {
  const [sort, setSort] = useState(defaultSort);

  const handleSortChange = (event) => {
    setSort(event.target.value);
    handleChange(event.target.value);
  }

  return (
    <div className='d-flex align-items-center'>
      <div>
        <label>Sort by</label>
      </div>
      <div className='m-1'>
        <Form.Select data-testid='sort-select' value={sort} onChange={handleSortChange}>
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  )
}

SortControl.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  defaultSort: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SortControl;
