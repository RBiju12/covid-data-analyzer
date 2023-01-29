import React from 'react';
import logo from './logo-png.png'; 

function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="webtitle">Covid Data Analyzer</a>
        <ul>
            <li>
                <a href="/DataVisualizations">Data Visualizations</a>
              </li>
              <li>  
                <a href="/News">News</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
        </ul>
        <img className="logo" src={logo} alt="Logo" height="40px" width="90px" align="right"/>
    </nav>
    )
}


export default Navbar;