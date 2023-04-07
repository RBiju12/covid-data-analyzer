import React, { useState } from 'react';
import './stylesheet.css';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './pages/About';
import DataVisualizations from './pages/DataVisualizations';
import Trends from './pages/Trends';
import News from './pages/News';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function Popup({ onClose }) {
  return (
    <div className='popup'>
      <h2>Welcome to my website!</h2>
      <p><strong>Stay Informed on COVID</strong></p>
      <button className='close-btn' onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DataVisualizations' element={<DataVisualizations />} />
          <Route path='/Trends' element={<Trends />} />
          <Route path='/News' element={<News />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
