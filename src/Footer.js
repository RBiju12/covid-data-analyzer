import React from 'react';
import linkedin from './Linkedin.png';
import gmail from './Gmail.png';


function Footer(){

    const handleSubmit = () => {
        alert("Thank you for subscribing to the newsletter!")
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

            <input type="text" placeholder="ex.janedoe@gmail.com"/>
            <button type="submit" onClick={handleSubmit}>Enter</button>
        </div>
        
        {`Copyright  © Covid Analyzer ${year}`}



        
        
        </footer>
        </div>
        </>
    )
}

export default Footer;