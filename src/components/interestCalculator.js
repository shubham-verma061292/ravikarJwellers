import React, { Component } from 'react';

class InterestCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intType: "monthly",
            noOfMonths: "",
            toDate: "",
            fromDate: "",
            amount: "",
            rateOfInterest: "",
            intAmount: ""
        }
        // this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            intType: changeEvent.target.value
        });
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(event.target)
        this.setState({
            [name]: value
        });
    };

    calculateIntrest() {
        this.state.intAmount = (this.state.amount * this.state.rateOfInterest * this.state.noOfMonths) / (12 * 100)
        return this.state.intAmount;
    }
    render() {
        var element;
        if (this.state.intType === "monthly") {
            element = <div className="">
                <span className="col25 "><label className="bFont">No of Months :</label></span>
                <span className="col75"><input className="inputBox" type="text" name="noOfMonths" value={this.state.noOfMonths} onChange={this.handleInputChange} />
                </span>
            </div>
        } else {
            element = <span>
                <div className="">
                    <span className="col25"><label className="bFont">From Date :</label></span>
                    <span className="col75"><input type="Date" className="inputBox" placeholder="  From Date" name="fromDate" value={this.state.fromDate} onChange={this.handleInputChange} />
                    </span>
                </div>
                <div>
                    <span className="col25"><label className="bFont">To Date :</label></span>
                    <span className="col75"><input type="Date" name="toDate" className="inputBox" placeholder="To Date" value={this.state.toDate} onChange={this.handleInputChange} />
                    </span>
                </div>
            </span>
        }
        return (
            <React.Fragment>
                <h2 className="text-center mT20">Interest Calculator</h2>
                <div className="container">
                    <div className="row">
                        <form className="mT10 center" onSubmit={this.handleSubmit}>
                            <div className="">
                                <span className="radio">
                                    <label className="bFont">
                                        <input type="radio" name="monthly" value="monthly"
                                            checked={this.state.intType === "monthly"} onChange={this.handleOptionChange} />Monthly Basis</label>
                                </span>
                                <span className="radio">
                                    <label className="bFont mL20"><input type="radio" name="daily" value="daily"
                                        checked={this.state.intType === "daily"} onChange={this.handleOptionChange} />Day Wise</label>
                                </span>
                            </div>

                            <div className="">
                                <span className="col25"><label className="bFont">Amount :</label></span>
                                <span className="col75"><input type="text" className="inputBox" name="amount"
                                    placeholder="  in rupees"
                                    value={this.state.amount} onChange={this.handleInputChange} />
                                </span>
                            </div>

                            <div className="">
                                <span className="col25 "><label className="bFont">Rate of Interest :</label></span>
                                <span className="col75 input"><input type="text" className="inputBox" name="rateOfInterest" value={this.state.rateOfInterest} onChange={this.handleInputChange} />
                                </span>
                            </div>
                            {element}
                            Interest Amount {this.calculateIntrest()}

                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default InterestCalculator;
