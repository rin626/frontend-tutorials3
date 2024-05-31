import React, { useState } from 'react';
import '../App.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="home">
      <h2></h2>
      <p>Find and share the best surf spots.</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for surf spots..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Home;
