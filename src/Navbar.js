import React from 'react';
import logo from './logo-png.png'; 
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import { Avatar } from '@mui/material';


function Navbar(){
    return (
    <nav className="nav">
        <Link to="/" className="webtitle">Covid Data Analyzer</Link>
        <ul>
           <CustomLink to="/DataVisualizations">Data Visualizations</CustomLink>
           <CustomLink to="/Trends">Trends</CustomLink>
           <CustomLink to ="/News">News</CustomLink>
           <CustomLink to ="/About">About</CustomLink>
        </ul>
        <Avatar className="logo" src={logo} alt="Logo" height="200px" width="150px" align="right"/>
    </nav>
    )
}
//This displays all links to Navbar component so it is accessible 

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    //allows for path to be full absolute to render each section
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    //allows for url to be matched and correctly identifies if the path is correct
    

    return(
    <li className={isActive ? "active": " "}>
    <Link to={to} {...props}> {children} </Link>
    </li>
    )

}

export default Navbar;