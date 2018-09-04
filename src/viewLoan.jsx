import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom";
import './../App.css';
import AddLoan from './addLoan';

class ViewLoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      village: "",
      typeOfJwel: "silver",
      weight: "",
      phoneNumber: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/12')
      .then(response =>
        response.json()
      )
      .then(json => {
        this.setState({
          name: json.userId,
          village: json.title,
          weight: json.id
        })
      })
  }

  goToAddLoan = () => {
  }

  changeViewState = () => {

  }
  dismiss() {
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="text-center">View Loan Information</h2>
        <div id="viewPage" className=" mT10 center">
          <label className="bFont">Name: </label> {this.state.name}<br />
          <label className="bFont">Village: </label> {this.state.village} <br />
          <label className="bFont">Type Of Jewl:</label> {this.state.typeOfJwel}<br />
          <label className="bFont">Weight: </label> {this.state.weight}<br />
          <label className="bFont">Phone Number:</label> {this.state.phoneNumber}
        </div>
        
      </React.Fragment>
    );
  }
}

export default ViewLoan;
