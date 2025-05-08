import React, { useState } from 'react';
import search from '../assets/images/search.png'
import './Search.css'; // We'll create this CSS file next

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', query); // Replace with your search logic
  };

  return (
    <>
    <p className='form-title'>People also ask:</p>
    <div className="form-containers">
    <form onSubmit={handleSearch} className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Is Notely free to use?"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <span className="magnifying-glass">
        <img src={search} alt="" />
        </span>
      </button>
    </form>
    </div>
    </>
    )
  }
export default SearchBar;