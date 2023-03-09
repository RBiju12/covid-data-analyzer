import React from 'react'
import PropTypes  from 'prop-types';
import ReactApexChart from 'react-apexcharts';

class StateSelector extends React.Component{

    
    constructor(props){
        super(props);

        this.state = {
            options: {
            chart: {
                id: 'line-chart'
            },
            xaxis: {
                categories: []
            }
            },
            series: [{
                name: 'series1',
                data: []
            }],
            filterValue: ''
        };

        }

    fetchData = (state) => {
        let url = "https://api.covidtracking.com/v1/states/daily.json"
        if(state){
            url += `?state=${state}`;

        }
        fetch(url)
        .then(response=> response.json())
        .then(data => {
            const updateddata = data
            .filter((item) => item.date.toString().startsWith('2021'))
            .slice(-8)
            .reverse();

            const dates = updateddata.map((item) => item.date);
            const cases = updateddata.map((item) => item.positive);
       
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: {
                        categories: dates
                    }
                },
                series: [{
                    name: 'series1',
                    data: cases
                }]
            })
        }).catch((error) => console.log(error));
    }


    handleFilterChange = (value) => {
        this.setState({filterValue: value});
        if(value) {
            this.fetchData(value);
        }
        else{
            this.fetchData();
        }
    }


    componentDidMount = () => {
        this.fetchData()
    }

    handleChange = event => {
        const {value} = event.target 
        this.fetchData(value)
    };
    render(){
    return(
    <>
        <div className="chart1">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={200} />
            <br />
        </div>
        <div className='dropdown' />
        <label htmlFor="state">Filter by state:</label>
        <select id="state" value={this.state.filterValue} onChange={(event) => this.handleFilterChange(event.target.value)}>
                <option value="">All</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
        </select>
        <div/>
    </>
        
    )
}

}


const propTypes = {

    id: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string
};

StateSelector.propTypes = propTypes;

export default StateSelector;
