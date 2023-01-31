import React from 'react';


function Footer(){

    const handleSubmit = () => {
        alert("Thank you for subscribing to the newsletter!")
    }



    const year = new Date().getFullYear();

    return(
        <>
        <div className='footer'>
        <footer>
        <h1><strong>Resources</strong></h1>
        <a href="https://www.cdc.gov/">Center for Disease Control</a>
        <br></br>
        <a href="https://coronavirus.jhu.edu/map.html"> John's Hopkins Covid Dashboard</a>

        <div className='connect'>
            <h1>Connect</h1>
            
        </div>

        <div className='Newsletter'>
            <h2><strong>Join our Newsletter</strong></h2>

            <input type="text" placeholder="@janedoe@gmail.com"/>
            <button type="submit" onClick={handleSubmit}>Enter</button>
        </div>
        
        {`Copyright  © Covid Analyzer ${year}`}



        
        
        </footer>
        </div>
        </>
    )
}

export default Footer;