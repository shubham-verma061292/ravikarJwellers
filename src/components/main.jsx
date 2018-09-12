import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import ViewLoan from './viewLoan';
import AddLoan from './addLoan';
import Home from './home';
import InterestCalculator from './intCalculator'

class Main extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/viewLoan" component={ViewLoan} />
                    <Route path="/addloan" component={AddLoan} />
                    <Route path="/intCalculator" component={InterestCalculator} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
