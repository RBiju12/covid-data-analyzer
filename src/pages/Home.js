import React from 'react'
import logoimage from './HomeImage.png'
import { useState} from 'react';
import {dataref} from "./firebase"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pagestyles.css"
import {TextField} from '@mui/material'
import AWS from 'aws-sdk'

function Home(){
   
const AWS_REGION = 'us-east-1';


AWS.config.update({
  accessKeyId: 'AKIAX7YIBHE5POAEIL4K',
  secretAccessKey: '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',
  region: AWS_REGION
});


const sns = new AWS.SNS({ region: AWS_REGION });

   const[email, setEmail] = useState('')

   const handleAdd = () => {
      if(email !==""){
        dataref.ref().child('all').push(email)
          .then(() => {
            setEmail("")
    
            dataref.ref('all').once('value', (snapshot) => {
              const emails = [];
              snapshot.forEach((childSnapshot) => {
                const email = childSnapshot.val();
                emails.push(email);
              });
    
              const emailList = emails.join(', ');
    
              const params = {
                TopicArn: 'arn:aws:sns:us-east-1:549235800378:CovidAnalyzerData',
                Message: `Thank you for signing up, you will receive updates: ${emailList}`
              };
    
              sns.publish(params, (err, data) => {
                if(err){
                  console.error("Error sending SNS notification: ", err);
                }
                else{
                  console.log("SNS notification sent: ", data)
                }
              });
            });
          })
          .catch((error) => {
            console.error("Error adding email ", error)
          });
      }
    };
    
   
   return(
   <div className='containerhome'>
      <div className='backgroundlogo'>
      <img src={logoimage} height="220px" alt="logoimages" className='homebackground'/>
      </div>
      <div className='missionstat'>
         <h1 className='headert'>Mission Statement:</h1>
         <p>Our mission is to empower the public with timely, accurate, and easily accessible Covid-19 data to promote informed decision-making and ultimately mitigate the impact of the pandemic. </p>
      </div>
      <div className='alerts'>
      <h1 align="center" className='alerttext'>Alerts:</h1>
      <h2 className='reducesize'>COVID Data Analyzer Updates</h2>
      <h3 classname="hometext">Email Address:</h3>
      <br></br>
      <br></br>
      <br></br>
      <div className='screentog'>
      <Button className='emailbutton' onClick={handleAdd}>Submit</Button>
      <TextField className="emailform" placeholder='ex. janedoe@gmail.com' variant='standard' value={email} onChange={(e) =>
      {setEmail(e.target.value)}} />
      <p id="alerttext"><i>Sign up to receive weekly updates on COVID data</i> </p>
      </div>
      <br>
      </br>

      </div>
    </div>
   );
}

export default Home;