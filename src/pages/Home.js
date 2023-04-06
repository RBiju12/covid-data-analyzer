import React from 'react'
import logoimage from './HomeImage.png'
import { useState, useEffect } from 'react';
import {dataref} from "./firebase"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pagestyles.css"
import {TextField} from '@mui/material'

function Home(){

   const[email, setEmail] = useState('')
   const[allValue, setAllValue]=useState([])

   const handleAdd = () => {
      if(email !==""){
      dataref.ref().child('all').push(email)
      setEmail("")
   }
}

useEffect(() =>{
   dataref.ref().child('Users').on('value', data=>{
      const getData=Object.values(data.val())
      setAllValue(getData)
   })
}, [])
console.log(allValue)



   return(
   <div className='containerhome'>
      <div className='backgroundlogo'>
      <img src={logoimage} height="220px" alt="logoimages" className='homebackground'/>
      </div>
      <div className='missionstat'>
         <h1 className='headert'>Mission Statement:</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nulla pellentesque dignissim enim sit. Velit aliquet sagittis id consectetur purus ut faucibus. 
            Id aliquet lectus proin nibh nisl condimentum id. Feugiat pretium nibh ipsum consequat nisl. </p>
      </div>
      <div className='alerts'>
      <h1 align="center" className='alerttext'>Alerts:</h1>
      <h2 className='reducesize'>COVID Data Analyzer Updates</h2>
      <h3 classname="hometext">Email Address:</h3>
      <br></br>
      <br></br>
      <br></br>
      <Button className='emailbutton' onClick={handleAdd}>Submit</Button>
      <TextField className="emailform" placeholder='ex. janedoe@gmail.com' variant='standard' value={email} onChange={(e) =>
      {setEmail(e.target.value)}} />
      <p id="alerttext"><i>Sign up to receive weekly updates on COVID data</i> </p>
      <br>
      </br>

      </div>
    </div>
   );
}

export default Home;