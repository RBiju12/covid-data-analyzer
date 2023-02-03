import React from 'react'
import Profile from './profile.png'

function About(){
   return(
    <>
   <div className='aboutcontain'>
    <div className='about'>
    <h1> About </h1>
    </div>
    <p>Hello I am Rishan Biju and am a developer of the Covid Data Analyzer project that focuses on relaying information 
      to the public. This project involves the deployment of a web application that provides Covid data in graphs using an API. 
      There are functionalities for the user to click through each widget pertaining to Covid to find whatever widget the user is interested in (ex. state trends). I hope to change many lives with the information I am providing to the public and inspire new 
      developers to help change the world.
      <br></br>


    <img src={Profile} height="380px" width="400px" alt="Profile"></img>

      <br></br>
      Additional Contact information:
      <br></br>
      <br></br>
      Email: rishanbiju@gmail.com
    </p>
    </div>
    </>
   );
}

export default About;