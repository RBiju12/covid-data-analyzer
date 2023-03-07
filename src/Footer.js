import React, {useState} from 'react';
import linkedin from './Linkedin.png';
import gmail from './Gmail.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){


    const[userText, setUserText] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();

            if(userText.trim() === ''){
        alert("Please enter in the field!")
            }
            else if(!/(@gmail|outlook)/.test(userText)){
                alert("Please enter a valid email address!")
            }
            else{
         alert(`Thank you for submitting the newsletter: ${userText}`)
            }
}



    const year = new Date().getFullYear();

    return(
        <>
        <div className='footer'>
        <footer>
        <div className='resources'>
        <h1><strong>Resources</strong></h1>
        <a href="https://www.cdc.gov/">Center for Disease Control</a>
        <br></br>
        <a href="https://coronavirus.jhu.edu/map.html"> John's Hopkins Covid Dashboard</a>
        </div>
        <div className='connect'>
            <h1>Connect</h1>
            <a href="https://www.linkedin.com/in/rishan-biju-759a20242"><img src={linkedin} height="30px" width="40px" alt="Linkedin" /></a>
            <a href="https://gmail.com"><img src={gmail} height="30px" width="40px" alt="Gmail" /></a>

            
        </div>

        <div className='newsletter'>
            <h2><strong>Join our Newsletter</strong></h2>
            <br></br>
            <input type="text" value={userText} placeholder="ex.janedoe@gmail.com" onChange={(e) => setUserText(e.target.value)}/>

            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </div>
        
        {`Copyright  © Covid Analyzer ${year}`}



        
        
        </footer>
        </div>
        </>
    )
}

export default Footer;