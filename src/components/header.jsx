import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
//import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import './../css/header.css'
class Header extends Component {
    state = {}
    render() {
        return (
            <header className="header-search">
                <div className="header-limiter">
                    <h1><NavLink to="/">Ravikar<span>Jwellers</span></NavLink></h1>
                    <nav>
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/viewLoan">View Loan</NavLink>
                            <NavLink to="/addLoan">Add Loan</NavLink>
                            <NavLink to="/intCalculator">Interest Calculator</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}

export default Header;
