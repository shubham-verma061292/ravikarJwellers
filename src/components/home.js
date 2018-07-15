import React, { Component } from 'react';
import './../css/home.css'
import './../logo_new.jpg';
export class Home extends Component {
  render() {
    return (
      <div class="box mt20">
          <img src={require('./../logo_new.jpg')}  alt="logo" />
      </div>
    );
  }
}

export default Home;
