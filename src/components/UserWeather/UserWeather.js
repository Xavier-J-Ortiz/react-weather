import React, { Component } from 'react';

class UserWeather extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
   console.log(this.props.weatherData);
    return (
      <p className="text-center"> This is the user's weather </p>
    )

  }
}

export default UserWeather;
