import React, { useState} from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import states from './states.json';
import "./pagestyles.css";


const TrendSelector = ({ id, className }) => {
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


  const [filterValue, setFilterValue] = useState('');


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

  const dataForState = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({ date: item.date, positiveIncrease: item.positiveIncrease }))


  const dates = dataForState.slice(0, 5).map(item => item.date).sort((a, b) => a - b);
  const positiveTrendValues = dataForState.slice(0, 5).map(item => item.positiveIncrease).sort((a, b) => a - b);

  const dataForDeathTrends = data
  .filter(item => item.state.startsWith(state))
 .map(item => ({date: item.date, deathIncrease: item.deathIncrease}))



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
      })
      .catch((error) => console.log(error));
  };


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
      <h1 className='graph1'><strong>Cases Trends</strong></h1>
      <div className="chart1">
        <ReactApexChart
          options={options}
          series={series}
          type="line" 
          height={170}
        />
      </div>
      <h1 className='graph2'><strong>Death Trends</strong></h1>
      <div className='chart2'>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
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




