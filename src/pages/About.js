import Profile from './profile.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function About(){
 const [email, setEmail] = useState('')
 
 const handleClick = () => {
    setEmail('rishanbiju@gmail.com');
  }




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




    <img src={Profile} height="320px" width="400px" alt="Profile"></img>

      <br></br>
      Additional Contact information:
      <br></br>
      <p>{email}</p>
      <Button onClick={handleClick}>Email</Button>
    </p>
    </div>
    </>
   );
}


export default About;
