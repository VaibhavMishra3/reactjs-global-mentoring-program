import React from 'react';

const SortControl = ({ currentSort, onSortChange }) => {
  return (
    <div className="sort-control">
      <label>Sort by</label>
      <select value={currentSort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
