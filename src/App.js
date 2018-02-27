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
      }
    }
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //console.log("latitude: " + position.coords.latitude + "\nlongitude: " + position.coords.longitude);
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.logitude
          }
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
        <UserLocation position={this.state.position}/>
        <UserWeather position={this.state.position}/>
      </div>
    );
  }
}

export default App;
