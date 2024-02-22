import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { FaSearch } from 'react-icons/fa';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='Navbar'>
          <div className='Navbar_logo'>
            Fotoflix
          </div>
          <form action="" className="Navbar_search">
            <input type="text" className="form-input" placeholder='search' />
            <button type="submit" className="submit-btn">
              <FaSearch/>
            </button>
          </form>
          <div className='Navbar_links'>
            <Link to="/">Home</Link>
            <Link to="/Favourites">Favourites</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
