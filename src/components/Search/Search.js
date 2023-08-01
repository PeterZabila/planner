import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import './search.css'

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {

  }

  return (
    <div className='search'>
      <input 
        className='searchField'
        type='text' 
        placeholder='Search by keywords' 
        value={search} 
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <RiSearchLine className="search-icon" />
    </div>
  )
}

export default Search
