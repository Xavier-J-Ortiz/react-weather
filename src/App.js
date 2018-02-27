import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserLocation from './components/UserLocation/UserLocation.js'
import UserWeather from './components/UserWeather/UserWeather.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: null,
        longitude: null,
      },
      weatherData: null
    }
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const url = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;

        fetch(url)
          .then(response => {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then(data => {
            //console.log(data.weather);
            //console.log(latitude);
            //console.log(longitude);
            this.setState({ 
              weatherData: data.weather,
              location: {
                latitude: latitude,
                longitude: longitude
              }
            });
          });
      });
    } else {
      console.log("Cannot fetch location data. Will use coordinates 0, 0");
      this.setState({
        location: {
          latitude: 0,
          longitude: 0
        }
      });
    }  
  }

  render() {
    return (
      <div className="">
        <h1 className="text-center">Xavier's Weather App</h1>
        <UserLocation position={this.state.location}/>
        <UserWeather weatherData={this.state.weatherData}/>
      </div>
    );
  }
}

export default App;
