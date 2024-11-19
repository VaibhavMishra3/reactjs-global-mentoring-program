import React from 'react'
import { PropTypes } from 'prop-types';
import { useRouter } from 'next/router';

import SearchForm from './SearchForm'
import { filterType } from '../../constants/types.js';
import { navigationByFilter } from '../../utils/navigation.js';

const SearchFormFragment = ({ filter, search, handleSearch }) => {
  const router = useRouter();

  return (
    <div>
      <span
        data-testid='add-movie'
        className='float-end'
        onClick={() => router.push(navigationByFilter('/new', filter))}
      >
        Add movie
      </span>
      <SearchForm
        initialSearchText={search}
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={handleSearch}
      />
    </div>
  )
}

SearchFormFragment.propTypes = {
  filter: filterType.isRequired,
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchFormFragment;
