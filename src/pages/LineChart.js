import React from "react"
import { useEffect, useState } from "react"
import Chart from 'react-apexcharts'
import axios from 'axios'

function LineChart(){
    
  const [options, setOptions] = useState({
    chart: {
      id: 'test'
    }, 
    xaxis: {
      categories: ["September", "October", "November", "December", "January", "February"]
    }
  })

  const [series, setSeries] = useState([{
    name: "serie1",
    data: [0, 150, 300, 450, 600, 750]
  }])
  


  useEffect(() => {
    const deaths = []
   axios.get("https://api.covidtracking.com/v1/us/daily.json").then(response=>{
    console.log("response", response)
    response.data.data.map(item => {
      console.log("item", item)
      deaths.push(item.death)
    })
      console.log("deaths", deaths)
   })
  }, []);


  return (
     <div>
      <Chart options={options} series={series} type="line" width={800} height={500}/>
      </div>

  )
}
  export default LineChart;
