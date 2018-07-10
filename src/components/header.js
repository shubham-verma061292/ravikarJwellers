import React, { Component } from 'react';
import './../css/header.css'
export class Header extends Component {
  render() {
    return (
      <div>
        <header class="header-login-signup">
          <div class="header-limiter">
            <h1><a href="#"><i>Ravikar</i><span>Jwellers</span></a></h1>
            <nav>
              <a href="#">Home</a>
              <a href="#" class="selected">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">About</a>
					    <a href="#">Faq</a>  
					    <a href="#">Contact</a>
            </nav>
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

