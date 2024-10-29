import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import SearchForm from './SearchForm'
import { SEARCH_QUERY_PARAM, DEFAULT_SEARCH } from '../../constants/data.js';
import { navigation } from '../../utils/navigation.js';

const SearchFormFragment = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key, value) => {
    setSearchParams(params => {
      params.set(key, value);
      return params;
    });
  }

  const navigate = useNavigate();
  const search = searchParams.get(SEARCH_QUERY_PARAM) || DEFAULT_SEARCH;

  return (
    <div>
      <span
        data-testid='add-movie'
        className='float-end'
        onClick={() => navigate(navigation('/new', searchParams))}
      >
        Add movie
      </span>
      <SearchForm
        initialSearchText={search}
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={(value) => updateSearchParams(SEARCH_QUERY_PARAM, value)}
      />
      <Outlet />
    </div>
  )
}

export default SearchFormFragment;
