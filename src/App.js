import React from 'react';
import "./stylesheet.css"

import Navbar from "./Navbar";
import About from './pages/About';
import DataVisualizations from './pages/DataVisualizations';
import News from './pages/News';
import Home from './pages/Home';
function App(){
    let component
    switch(window.location.pathname){
        case "/": component = <Home/>
            break
        case "/datavisualizations": component = <DataVisualizations/>
            break
        case "/about": component = <About/>
            break
        case "/news": component = <News/>
            break
        default: console.error("Fix Path")
    }
    return(
        <>
        <Navbar />
        <div className='container'>  {component}</div>
        </>
    );
}

export default App;