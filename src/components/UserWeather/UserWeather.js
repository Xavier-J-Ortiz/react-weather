import React, { Component } from 'react';

class UserWeather extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    //console.log(this.props.weatherIcon);
    return (
      <div>
        <h3 className="text-center"> {Math.round(this.props.tempData) + " degrees C"} </h3>
        <h3 className="text-center"> {this.props.weatherData} </h3>
        <img className="mx-auto d-block" src={this.props.icon} alt={this.props.iconDescription}/>
      </div>
    )

  }
}

export default UserWeather;
