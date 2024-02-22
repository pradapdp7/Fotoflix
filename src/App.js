import './App.css';
import React from 'react';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='Navbar'>
          <div className='Navbar_logo'>
            Fotoflix
          </div>
          <div className='Navbar_links'>
            <Link to="/">Home</Link>
            <Link to="/favourites">favourites</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Photos />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
