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
      weatherData: null,
      countryData: null,
      cityData: null,
      countryData: null,
      isCelcius: true,
      fahrenheit: null,
      celcius: null
    }
  }

  componentWillMount() {
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
            //console.log(data);
            this.setState({ 
              weatherData: data.weather[0].main,
              weatherIcon: data.weather[0].icon,
              iconDescription: data.weather[0].description,
              cityData: data.name,
              countryData: data.sys.country,
              fahrenheit: data.main.temp * 1.8 + 32,
              celcius: data.main.temp,
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

  changeTempUnits = () => { this.setState( { isCelcius: !this.state.isCelcius } ) }

  render() {
    return (
      <div className="weather">
        <h1 className="text-center">Xavier's Weather App</h1>
        <UserLocation city={ this.state.cityData } country={ this.state.countryData }/>
        <UserWeather weatherData={ this.state.weatherData } celcius={ this.state.celcius } fahrenheit={ this.state.fahrenheit } icon={ this.state.weatherIcon } iconDescription={ this.state.iconDescription } isCelcius={ this.state.isCelcius } changeTempUnits={ this.changeTempUnits }/>
      </div>
    );
  }
}

export default App;
