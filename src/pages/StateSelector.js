import React, { useState} from 'react';
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


        // const dates = data
        // .filter(item => item.state.startsWith(state))
        // .map(item => item.date)
        // .slice(0, 5)
        // .sort((a, b) => a - b);

        const dataForState = data
  .filter(item => item.state.startsWith(state))
  .map(item => ({ date: item.date, positive: item.positive }))
  // .sort((a, b) => b.date - a.date);


  const dates = dataForState.slice(0, 5).map(item => item.date).sort((a, b) => a - b);
  const positiveValues = dataForState.slice(0, 5).map(item => item.positive).sort((a, b) => a - b);



        
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
          <option value="">Choose State</option>
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




