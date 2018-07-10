import React, { Component } from 'react';
import './../css/header.css'
import './../logo_new.jpg';
export class Home extends Component {
  render() {
    return (
      <div>
          <img src={require('./../logo_new.jpg')}  alt="logo" />
      </div>
    );
  }
}

export default Home;
