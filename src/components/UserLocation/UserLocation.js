import React, { Component } from 'react';

class UserLocation extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let country = this.props.country;
    return (
      <h3 className="text-center"> The user is located in {this.props.city}, {country} </h3>
    )

  }
}

export default UserLocation;
