import React from 'react'
import logoimage from './HomeImage.png'

function Home(){
   return(
   <div className='containerhome'>
      <div className='backgroundlogo'>
      <img src={logoimage} height="220px" alt="logoimages"/>
      </div>
      <div className='missionstat'>
         <h1>Mission Statement:</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nulla pellentesque dignissim enim sit. Velit aliquet sagittis id consectetur purus ut faucibus. 
            Id aliquet lectus proin nibh nisl condimentum id. Feugiat pretium nibh ipsum consequat nisl. </p>
      </div>
      <div className='alerts'>
      <h1 align="center">Alerts:</h1>
      <h2>COVID Data Analyzer Updates</h2>
      <h3>Email Address:</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className='emailbutton'>Submit</button>
      <input className="emailform" type="text" placeholder='ex. janedoe@gmail.com'></input>
      <p id="alerttext"><i>Sign up to receive weekly updates on COVID data</i> </p>



      </div>
    </div>
   );
}

export default Home;