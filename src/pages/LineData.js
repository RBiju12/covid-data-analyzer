import axios from 'axios'

  const covidurl = "https://api.covidactnow.org/v2/states.json?apiKey=0619b64874b843fead2c2517b3f6b0f1"
    
  export const fetchData = async(state) => {
    let userchange = covidurl;
    if(state){
      userchange = `${covidurl}/country/{state}`
    }
    try{
      const {data: {weeklyCovidAdmissionsPer100k, infectionRate, deaths, hospitalBeds}} = await axios.get(userchange)
      return {weeklyCovidAdmissionsPer100k, infectionRate, deaths, hospitalBeds}
    }
    catch(error){
      console.log(error)
    }
  };
   
 export const fetchDailyData = async() => {
    try{
      const {data} = await axios.get(`${covidurl}/daily`);
      return data.map(({cases, deaths, lastUpdatedDate}) => ({cases:
        cases, deaths: deaths, lastUpdatedDate}));
    }
    catch(error){
      return error
    }
  }

 export const fetchStates = async() => {
    try{
      const{data: {country}} = await axios.get(`${covidurl}/country`)
      return country.map((item) => item.state);
    }
    catch(error){
      return error
    }
  }
    
