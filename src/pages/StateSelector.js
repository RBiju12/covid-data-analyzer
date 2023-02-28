import React from 'react'
import states from './states.json'
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
            }]
        };

        }


    fetchData = () => {
        fetch("https://api.covidtracking.com/v1/states/current.json")
        .then(response=> response.json())
        .then(data => {
            const dates = data.map(item => item.date);
            const cases = data.map(item => item.probableCases);
       
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: {
                        categories: categories
                    }
                },
                series: [{
                    name: 'series1',
                    data: seriesData
                }]
            })
        })
    }


    ComponentMountCheck = () => {
        this.fetchData()
    }



    handleChange = event => {
        const {onChange} = this.props;
        onChange(event.target.value);
    };
    render(){
        const{id, className} = this.props
    return(
        <>
        <select id={id} className={className} onChange={this.handleChange}>
            {states.map(item => (

                <option key={item.abbreviation} value={item.abbreviation}>
                    {item.name}

                </option>
            ))}
        </select>
        <div className="chart1">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={200} />
            </div>
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
