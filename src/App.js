import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
