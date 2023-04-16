import Profile from './profile.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pagestyles.css"

  
function About(){
 const [email, setEmail] = useState('')
 
 const handleClick = () => {
    setEmail('rishanbiju@gmail.com');
 }
//Changes states to email
   return(
    <>
   <div className='aboutcontain'>
    <div>
    <h1 className='about'> About </h1>
    </div>
    <p className='informaton'>Hello I am Rishan Biju and am a developer of the Covid Data Analyzer project that focuses on relaying information
      to the public. This project involves the deployment of a web application that provides Covid data in graphs using an API.
      There are functionalities for the user to click through each widget pertaining to Covid to find whatever widget the user is interested in (ex. state trends). I hope to change many lives with the information I am providing to the public and inspire new
      developers to help change the world.
      <br></br>




    <img src={Profile} height="280px" width="400px" alt="Profile" className='profilepic'></img>

      <br></br>
      Additional Contact information:
      <p>{email}</p>
      <Button onClick={handleClick}>Email</Button>
    </p>
    </div>
    </>
   );
}


export default About;
