import React, {useState} from 'react';
import linkedin from './Linkedin.png';
import gmail from './Gmail.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Footer(){

    const[userText, setUserText] = useState('');
    const[submittedEmails, setSubmittedEmails] = useState([])

        const handleSubmit = (event) => {
            event.preventDefault();
            if(userText.trim() === ''){
                <Popup open={true} closeOnDocumentClick onClose={() => {}}>
                Please enter in the field!
                </Popup>
        }
            else if(!/(@gmail|outlook|hotmail)/.test(userText)){
                <Popup open={true} closeOnDocumentClick onClose={() => {}}>
                Please enter a valid email address!
                </Popup>
                }
            else if(submittedEmails.includes(userText)){
                <Popup open={true} closeOnDocumentClick onClose={() => {}}>
                Email has already been used
                </Popup>
            }
            else{
                setSubmittedEmails([...submittedEmails, userText]);
                <Popup open={true} closeOnDocumentClick onClose={() => {}}>
                 Thank you for submitting the newsletter: {userText}
                </Popup>
                }
              }

    const year = new Date().getFullYear();

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