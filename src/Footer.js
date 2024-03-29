import React, {useState} from 'react';
import linkedin from './Linkedin.png';
import gmail from './Gmail.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import './stylesheet.css'

function Footer(){

    const[userText, setUserText] = useState('');
    const[submittedEmails, setSubmittedEmails] = useState([])
    //Handles user input in the Footer Component
        const handleSubmit = (event) => {
            event.preventDefault();
            if(userText.trim() === ''){
                alert("Please enter in the field")
                //if the user does not type anything it displays a message
        }
            else if(!/(@gmail|outlook|hotmail)/.test(userText)){
                alert("Please enter a valid email address")
                //If the user does not type the appropriate email field it displays a message
                }
            else if(submittedEmails.includes(userText)){
                alert("Email is already in use")
            }
            //If the user already has the email in use it displays email is already in use
            else{
                setSubmittedEmails([...submittedEmails, userText]);
                alert(`Thank you for submitting the newsletter: ${userText}`)
                setUserText('')
                }
              }

    const year = new Date().getFullYear();
    //Returns all of the jsx(content) for the Footer Component 
    return(
        <>
        <div className='footer'>
        <footer>
        <div className='resources'>
        <h1><strong>Resources</strong></h1>
        <a href="https://www.cdc.gov/" className='cdc'>Center for Disease Control</a>
        <br></br>
        <a href="https://coronavirus.jhu.edu/map.html" className='hopkins'> John's Hopkins Covid Dashboard</a>
        </div>
        <div className='connect'>
            <h1>Connect</h1>
            <a href="https://www.linkedin.com/in/rishan-biju-759a20242"><img src={linkedin} height="27px" width="40px" alt="Linkedin" /></a>
            <a href="https://gmail.com"><img src={gmail} height="27px" width="40px" alt="Gmail" /></a>
        </div>
        <div align="center">
        {`Copyright  © Covid Analyzer ${year}`}
        </div> 
        <div className='newsletter'>
            <h2><strong>Join our Newsletter</strong></h2>
            <br></br>
            <form onSubmit={handleSubmit}>
            <input type="text" value={userText} placeholder="ex.janedoe@gmail.com" onChange={(e) => setUserText(e.target.value)}/>
            <Button type="submit">Submit</Button>
            </form>
        </div>
        </footer>
        </div>
        </>
    )
}

export default Footer;