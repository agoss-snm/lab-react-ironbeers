import React from 'react';

function SearchBar({ search, handleSearch }) {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(event.target.search.value);
  };

  return (
    <div className='align'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search"> <p>Search</p></label>
        <input type="text" id="search" value={search} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;