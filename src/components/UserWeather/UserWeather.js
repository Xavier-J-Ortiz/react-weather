import React, { Component } from 'react';

class UserWeather extends Component {

  constructor(props) {
    super(props);
    //this.state = {
      //fahrenheit: this.props.tempData * 1.8 + 32,
      //celcius: this.props.tempData
    //}
  }

  componentDidMount() {
    //this.setState({ 
      //fahrenheit: this.props.tempData * 1.8 + 32,
      //celcius: this.props.tempData
    //});
  }

  componentWillMount() {
    //this.setState({ 
      //fahrenheit: this.props.tempData * 1.8 + 32,
      //celcius: this.props.tempData
    //});
  }

  componentWillReceiveProps(nextProps) {
    //this.setState({ 
      //fahrenheit: this.props.tempData * 1.8 + 32,
      //celcius: this.props.tempData
    //});
  }

  render() {
    
    //console.log("celcius: " + this.props.celcius);
    //console.log("fahrenheit: " + this.props.fahrenheit);
    //console.log("this.props.tempData " + this.props.tempData);
    let celcius = this.props.celcius;
    let fahrenheit = this.props.fahrenheit;
    

    return (
      <div>
        <h3 className="text-center"> { Math.round((this.props.isCelcius ? celcius : fahrenheit) * 10) / 10 + " degrees " } <span className="tempUnit" onClick={ this.props.changeTempUnits }> { (this.props.isCelcius ? "C" : "F") } </span> </h3>
        <h3 className="text-center"> {this.props.weatherData} </h3>
        <img className="mx-auto d-block" src={this.props.icon} alt={this.props.iconDescription}/>
      </div>
    )

  }
}

export default UserWeather;
