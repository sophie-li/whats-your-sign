import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search'
        className='pa3 ba b--purple bg-washed-red'
        type='search'
        placeholder='Search Sign'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
