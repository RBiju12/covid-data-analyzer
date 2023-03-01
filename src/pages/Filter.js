import React from 'react'


class Filter extends React.Component {
    constructor(props){
        super(props)
      this.state = { filterValue: '' };
    }
  
    handleChange = event => {
      this.setState({ filterValue: event.target.value });
      this.props.onChange(event.target.value);
    };
  
    render() {
      return (
        <div>
          <label htmlFor="filter">Filter by state:</label>
          <input type="text" id="filter" value={this.state.filterValue} onChange={this.handleChange} />
        </div>
      );
    }
  }

  export default Filter;
  