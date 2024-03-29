import React, { useState} from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import states from './states.json';
import "./pagestyles.css";

//StateSelector component that initializes the option set that create a line chart with empty data
const StateSelector = ({ id, className }) => {
  const [options, setOptions] = useState({
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: [],
    },
  });



  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [],
    },
    {
      name:'series2',
      data: [],


    }
  ]);
//Creates another state that manages two datasets on a widget
  const [series3, setSeries3] = useState([
    {
      name: 'series1',
      data: [],
    },
    {
      name:'series2',
      data: [],

    }
  ]);



  const [filterValue, setFilterValue] = useState('');

  //Fetch data function that grabs the data and allows for users to parse to find a particular state

  const fetchData = (state) => {


    let url = 'https://api.covidtracking.com/v1/states/daily.json';
    if (state) {
      url += `?state=${state}`;


    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {


        // const dates = data
        // .filter(item => item.state.startsWith(state))
        // .map(item => item.date)
        // .slice(0, 5)
        // .sort((a, b) => a - b);

  //Parses data and grabs 5 datasets, maps it based on the dates and positive cases

  const dataForState = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({ date: item.date, positive: item.positive }))


  
  const dates = dataForState.slice(0, 5).map(item => item.date).sort((a, b) => a - b);
  const positiveValues = dataForState.slice(0, 5).map(item => item.positive).sort((a, b) => a - b);


  //Parses data and grabs 5 datasets based on the deaths and hospitalization
  const dataForDeaths = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({date: item.date, death: item.death }))

  const dataforTests = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({date: item.date, hospitalized: item.hospitalized}))

  const hospitalizations = dataforTests.slice(0, 5).map(item => item.hospitalized).sort((a, b) => a - b);


  const deathValues = dataForDeaths.slice(0, 5).map(item => item.death).sort((a, b) => a - b);
  //Grabs recovered cases and maps it with 5 datasets

  const dataforRecovered = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({date: item.date, recovered: item.recovered}))


  const recoveredvals = dataforRecovered.slice(0, 5).map(item => item.recovered).sort((a, b) => a - b);
        
        //const dates = updatedData.map((item) => item.date);
       // const cases = updatedData.map((item) => item.positive);


      //  const positiveValues = data
      //  .filter(item => item.state.startsWith(state))
      //  .reduce((result, item) => {
      //   console.log(item.positive)

      //    result.push(item.positive);
      //    return result;
      //  }, [])
      //  .slice(0, 5);
        setOptions({
          ...options,
          xaxis: {
            categories: dates,
          },
          colors: ['#F44336', '#0000FF'],
        });
        setSeries([
          {
            name: 'Cases',
            data: positiveValues,
          },
          {
            name: 'Deaths',
            data: deathValues,
          },
        ]);
    
      setSeries3([
        {
          name: "Hospitalizations",
          data: hospitalizations,
        },
        {
          name: "Recovered",
          data: recoveredvals,
        }
      ]);
      })
      .catch((error) => console.log(error));
  };
  //All of these set state methods allow for putting the data in the chart and rendering the widgets

//This function handles the Filter mechanism for the state a user selects and fetches the data
  const handleFilterChange = (value) => {
    setFilterValue(value);
    if (value) {
      fetchData(value);
    } else {
      fetchData();
    }
  };

//This function handles user input 
  const handleChange = (event) => {
    const { value } = event.target;
    handleFilterChange(value);
  };


//   useEffect(() => {
//     fetchData();
//   }, []);

  //Maps the state data and creates a dropdown for users to click through each state to see widgets
  return (
    <>
    <div className="dropdown">
        <label htmlFor="state">Filter by state:</label>
        <select
          id={id}
          className={className}
          onChange={handleChange}
          value={filterValue}
        >
          <option value="">Choose State</option>
          {states.map((item) => (
            <option key={item.abbreviation} value={item.abbreviation}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <h1 className='graph1'><strong>Positive Cases and Deaths</strong></h1>
      <div className="chart1">
        <ReactApexChart
          options={options}
          series={series}
          type="bar" 
          height={170}
        />
      </div>
      <br></br>
      <h1 className='graph2'><strong>Hospitalizations and Recovered</strong></h1>
      <div className='chart2'>
          <ReactApexChart
          options={options}
          series={series3}
          type="bar"
          height={170}
          />
      </div>
    </>
  );
};
//Renders all of the charts and displays 2 datasets for each chart


StateSelector.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};


export default StateSelector;




