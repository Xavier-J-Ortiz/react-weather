import React, { Component } from 'react';

class UserLocation extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.position)
    return (
      <p className="text-center"> This is the user location </p>
    )

  }
}

export default UserLocation;
