import React from 'react';
import '../App.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#spots">Spots</a></li>
        <li><a href="#favorites">Favorites</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
