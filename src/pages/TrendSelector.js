import React, { useState} from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import states from './states.json';
import "./pagestyles.css";

//Trend Selector component that renders the Trend widgets
const TrendSelector = ({ id, className }) => {
  const [options, setOptions] = useState({
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: [],
    },
  });

//Created multiple states that manage the data on the charts

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

  const [series22, setSeries22] = useState([
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
//Fetchdata function that fetches the covid data and displays the trend data based on the state

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

  //Maps and slices the data based on the date and positive increase in cases 

  const dataForState = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({ date: item.date, positiveIncrease: item.positiveIncrease }))


  const dates = dataForState.slice(0, 5).map(item => item.date).sort((a, b) => a - b);
  const positiveTrendValues = dataForState.slice(0, 5).map(item => item.positiveIncrease).sort((a, b) => a - b);
//Maps and slices data based on death trends
  const dataForDeathTrends = data
  .filter(item => item.state.startsWith(state))
 .map(item => ({date: item.date, deathIncrease: item.deathIncrease}))

//Maps and slices the data based on the hospitalization increase trend 
 const dataforHospitalizedTrends = data
 .filter(item => item.state.startsWith(state))
 .map(item => ({date: item.date, hospitalizedIncrease: item.hospitalizedIncrease}))

 //Maps and slices the data based on the total Viral test 
 const dataforViralTests = data
 .filter(item => item.state.startsWith(state))
 .map(item => ({date: item.date, totalTestsViral: item.totalTestsViral}))
 

 const ViralTest = dataforViralTests.slice(0, 5).map(item => item.totalTestsViral).sort((a, b) => a - b);

 const hospitalizedTrendValues = dataforHospitalizedTrends.slice(0, 5).map(item => item.hospitalizedIncrease).sort((a, b) => a - b);


  const deathValueTrends = dataForDeathTrends.slice(0, 5).map(item => item.deathIncrease).sort((a, b) => a - b);


        
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
            name: 'Case Trends',
            data: positiveTrendValues,
          },
          {
            name: 'Death Trends',
            data: deathValueTrends,
          },
        ]);
        setSeries22([
          {
            name: 'Hospitalized Trends',
            data: hospitalizedTrendValues
          },
          {
            name: 'Test Trends',
            data: ViralTest 
          }
        ]);
      })
      //Sets the data based on the Trend data and renders the charts 
      .catch((error) => console.log(error));
  };


  //Filter function that handles user input for selecting the state
  const handleFilterChange = (value) => {
    setFilterValue(value);
    if (value) {
      fetchData(value);
    } else {
      fetchData();
    }
  };


  const handleChange = (event) => {
    const { value } = event.target;
    handleFilterChange(value);
  };


//   useEffect(() => {
//     fetchData();
//   }, []);

//Renders the Trend Widgets and allows for filtering the render widgets of the datasets
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
      <h1 className='graph1'><strong>Case and Death Trends</strong></h1>
      <div className="chart1">
        <ReactApexChart
          options={options}
          series={series}
          type="line" 
          height={170}
        />
      </div>
      <h1 className='graph5'><strong>Hospitalization and Test Trends</strong></h1>
      <div className="chart2">
        <ReactApexChart
          options={options}
          series={series22}
          type="bar" 
          height={170}
        />
      </div>
    </>
  );
};


TrendSelector.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};


export default TrendSelector;




