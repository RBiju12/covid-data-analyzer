import React from 'react'
import states from './states.json'
import PropTypes  from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import Filter from './Filter';

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
            }]
        };

        }

    fetchData = (state) => {
        let url = "https://api.covidtracking.com/v1/states/daily.json"
        if(state){
            url += `?state=${state}`

        }
        fetch(url)
        .then(response=> response.json())
        .then(data => {

            const updateddata = data.slice(-8).reverse()

            const dates = updateddata.map(item => item.date);
            const cases = updateddata.map(item => item.positiveIncrease);
       
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


    handleFilter = (state) => {
        this.fetchData(state)
    }


    componentDidMount = () => {
        this.fetchData()
    }

    handleChange = event => {
        const {value} = event.target 
        this.fetchData(value)
    };
    render(){
        const{id, className} = this.props
    return(
        <div>
        <select id={id} className={className} onChange={this.handleChange}>
            {states.map(item => (

                <option key={item.abbreviation} value={item.abbreviation}>
                    {item.name}

                </option>
            ))}
        </select>
        <div className="chart1">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={200} />
                <br />
                <Filter onChange={this.handleFilter.bind(this)} key={this.state.filterValue}/>
            </div>
            </div>
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
