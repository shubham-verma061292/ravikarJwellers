import React, { Component } from 'react';
import './App.css';
import Header from  './components/header';
import Home from  './components/home';
import Footer from  './components/footer';
 class App extends Component {
  render() {
    return (
      <div className="App">  
        <div><Header/></div>
        <div><Home/></div>
        <div><Footer/></div>
      </div>
    );
  }
}

export default App;
