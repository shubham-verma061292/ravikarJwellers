import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewLoan from './viewLoan';
import AddLoan from './addLoan';
class Home extends Component {
    state = {}
    render() {
        return (
            <Router>
                <div>
                    <div className="container btnBtn">
                        <Link to="/addloan">
                            <button className="btn btn-info btn-sm" onClick={this.changeViewState}>Add Loan</button>
                        </Link>


                        <Link to="/viewLoan">
                            <button className="btn btn-info btn-sm" onClick={this.changeViewState}>View Loan</button>
                        </Link>
                    </div>
                    <Route exact path="/viewLoan" component={ViewLoan} />
                    <Route path="/addloan" component={AddLoan} />
                </div>
            </Router>
        );
    }
}

export default Home;
