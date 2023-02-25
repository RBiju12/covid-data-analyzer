import axios from 'axios'

  const covidurl = "https://api.covidtracking.com/v1/states/current.json"
    
  export const fetchData = async(state) => {
    let userchange = covidurl;
    if(state){
      userchange = `${covidurl}/states/{state}`
    }
    try{
      const {data: {positive, death}} = await axios.get(userchange)
      return {positive, death}
    }
    catch(error){
      console.log(error)
    }
  };
   
 export const fetchDailyData = async() => {
    try{
      const {data} = await axios.get(`${covidurl}/daily`);
      return data.map(({positiveCasesViral, hospitalized, positiveIncrease}) => ({cases:
        positiveCasesViral, hospitalized: hospitalized, positiveIncrease}));
    }
    catch(error){
      return error
    }
  }

 export const fetchStates = async() => {
    try{
      const{data: {states}} = await axios.get(`${covidurl}/states`)
      return states.map((item) => item.state);
    }
    catch(error){
      return error
    }
  }
    
