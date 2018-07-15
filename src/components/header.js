import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { InterestCalculator } from './interestCalculator';
import { Home } from './home';
import './../css/header.css'
export class Header extends Component {
  render() {
    return (
      <div>
        <header class="header-login-signup">
          <div class="header-limiter">
            <h1><a href="#"><i>Ravikar</i><span>Jwellers</span></a></h1>
            <Router>
            <nav>
            <Link to={'/Home'}>Home</Link>
                <Link to={'/InterestCalculator'}>InterestCalculator</Link>
                <Link to={'/Home'}>Home</Link>
                <Link to={'#'}>Pricing</Link>
                <Link to={'#'}>About</Link>
                <Link to={'#'}>Faq</Link>
           
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/InterestCalculator' component={InterestCalculator} />
               </Switch>
            </nav>
            </Router>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign up</a></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

