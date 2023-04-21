import React from 'react'
import logoimage from './HomeImage.png'
import { useState} from 'react';
import {dataref} from "./firebase"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pagestyles.css"
import {TextField} from '@mui/material'
import AWS from 'aws-sdk'
import Card from 'react-bootstrap/Card'

function Home(){
   
//All of the AWS regions and keys for configuration
const AWS_REGION = 'us-east-1';


AWS.config.update({
  accessKeyId: 'AKIAX7YIBHE5POAEIL4K',
  secretAccessKey: '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',
  region: AWS_REGION
});


const sns = new AWS.SNS({ region: AWS_REGION });
//Email state where if the the user types their email it pushes it to the Firebase database then cleares the text field once they submit the form

   const[email, setEmail] = useState('')

   const handleAdd = () => {
  if(email !== "") {
    // check if the email is already registered
    dataref.ref('all').orderByValue().equalTo(email).once('value', (snapshot) => {
      if (snapshot.exists()) {
        alert(`The email ${email} is already registered.`);
      } else {
        // check if the email is in the correct format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
        } else {
          // push the email to the Firebase database and send an SNS notification to the user
          dataref.ref('all').push(email)
          .then(() => {
            setEmail("");
            const params = {
              TopicArn: 'arn:aws:sns:us-east-1:549235800378:CovidAnalyzerData',
              Message: `Thank you for signing up, you will receive updates: ${email}` 
            };
            sns.publish(params, (err, data) => {
              if(err) {
                console.error("Error sending SNS notification: ", err);
              } else {
                console.log("SNS notification sent: ", data)
              }
            });
          })
          .catch((error) => {
            console.error("Error adding email ", error)
          });
        }
      }
    });
  } else {
    alert("Please enter an email address.");
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
      <Card className='alerts' bg="info">
      <Card.Title align="center" className='alerttext'>Alerts:</Card.Title>
      <Card.Subtitle>COVID Data Analyzer Updates</Card.Subtitle>
      <Card.Text><i>Sign up to receive weekly updates on COVID data</i> </Card.Text>
      <Card.Title>Email Address:</Card.Title>
      <TextField className="emailform" placeholder='ex. janedoe@gmail.com' variant='standard' value={email} onChange={(e) =>
      {setEmail(e.target.value)}} />
      <br />
      <Button className='emailbutton' onClick={handleAdd}>Submit</Button>
      </Card>
    </div>
   );
}
//Renders all of the Home page and renders all of the information/text field

export default Home;