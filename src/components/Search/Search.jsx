import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../reducers/filter';
import './search.css'

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(setFilter(searchWord));
      setSearchWord("");
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input 
          className='searchField'
          type='text' 
          placeholder='Search by keywords' 
          value={searchWord} 
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
      <RiSearchLine className="search-icon" />
    </div>
  )
}

export default Search
