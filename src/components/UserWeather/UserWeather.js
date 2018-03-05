import React, { Component } from 'react';

class UserWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: this.props.tempData * 1.8 + 32,
      celcius: this.props.tempData
    }
  }

  render() {
    let celcius = this.props.celcius;
    let fahrenheit = this.props.fahrenheit;
    let changeTempUnits = this.props.changeTempUnits;
    let isCelcius = this.props.isCelcius;

    return (
      <div>
        <h3 className="text-center"> { Math.round((isCelcius ? celcius : fahrenheit) * 10) / 10 + " degrees " } <span className="tempUnit" onClick={ changeTempUnits }> { (isCelcius ? "C" : "F") } </span> </h3>
        <h3 className="text-center"> {this.props.weatherData} </h3>
        <img className="mx-auto d-block" src={this.props.icon} alt={this.props.iconDescription}/>
      </div>
    )

  }
}

export default UserWeather;
