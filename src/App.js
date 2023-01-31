import React from 'react';
import "./stylesheet.css"
import Footer from "./Footer"
import Navbar from "./Navbar";
import About from './pages/About';
import DataVisualizations from './pages/DataVisualizations';
import News from './pages/News';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
function App(){
    
    return(
        <>
        <Navbar />
        <div className='container'>  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/DataVisualizations" element={<DataVisualizations />} />
                <Route path="/News" element={<News />} />
                <Route path="/About" element={<About />} />

            </Routes>
        </div>
        <Footer />
        </>
    );
}

export default App;