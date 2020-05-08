import React from 'react';
import RandomImage from './RandomImage';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2 inline-flex'>
      <input
        aria-label='Search'
        className='pa3 ba b--purple bg-washed-red'
        type='search'
        placeholder='Search Sign'
        onChange={searchChange}
      />
      <RandomImage />
    </div>
  );
};

export default SearchBox;
