import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import states from './states.json';


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
        // const states = data.filter(st => st.state.startsWith(state)).map((item) => item.date);
        // const states = data.filter(st => st.state.startsWith("AK")).map((item) => item.positive);




        // console.log(states);
        // const updatedData = data
        //   .filter((item) => item.date.toString().startsWith('2021'))
        //   .slice(-8)
        //   .reverse();


        const dates = data.filter(st => st.state.startsWith(state)).map((item) => item.date).slice(-5)
        //const dates = updatedData.map((item) => item.date);
       // const cases = updatedData.map((item) => item.positive);
       const positiveValues = data.filter(st => st.state.startsWith(state)).map((item) => item.positive).slice(-5)


        setOptions({
          ...options,
          xaxis: {
            categories: dates,
          },
        });
        setSeries([
          {
            name: 'series1',
            data: positiveValues,
          },
        ]);
      })
      .catch((error) => console.log(error));
  };


  const handleFilterChange = (value) => {
    setFilterValue(value);
    console.log("Value is " + value);
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
      <div className="chart1">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
        <br />
      </div>
      <div className="dropdown">
        <label htmlFor="state">Filter by state:</label>
        <select
          id={id}
          className={className}
          onChange={handleChange}
          value={filterValue}
        >
          <option value="">All States</option>
          {states.map((item) => (
            <option key={item.abbreviation} value={item.abbreviation}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};


StateSelector.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};


export default StateSelector;




