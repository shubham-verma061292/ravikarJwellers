import React, { Component } from 'react';
class AddLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            village: "",
            typeOfJwel: "silver",
            weight: "",
            amtPaid: "",
            debt: "",
            phoneNo: "",
            date: ''
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        console.log("A name was submitted: " + this.state, this.state.typeOfJwel);
        fetch('https://jsonplaceholder.typicode.com/posts/12')
            .then(response => response.json())
            .then(json => console.log(json))
        event.preventDefault();
    };


    render() {

        return (<React.Fragment>
            <h2 className="text-center">Add Loan Information</h2>
            <div className="container">
                <div className="row">
                    <form className="mT10 center" onSubmit={this.handleSubmit}>
                        <div className="">
                            <span className="col25 "><label className="bFont">Name :</label></span>
                            <span className="col75 input"><input type="text" className="inputBox" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25 "><label className="bFont">Village :</label></span>
                            <span className="col75"><input className="inputBox" type="text" name="village" value={this.state.village} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Type of Jwel :</label></span>
                            <span className="col75">   <select name="typeOfJwel"
                                className="selectBox" value={this.state.typeOfJwel} onChange={this.handleInputChange}>
                                <option value="gold">Gold</option>
                                <option value="silver">Silver</option>
                                <option value="diamond">Diamond</option>
                                <option value="platinum">Platinum</option>
                            </select>
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Weight :</label></span>
                            <span className="col75"><input type="text" className="inputBox"
                                placeholder="  in grams"
                                name="weight" value={this.state.weight} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Amount Paid :</label></span>
                            <span className="col75"><input type="text" className="inputBox" name="amtPaid"
                                placeholder="  in rupees"
                                value={this.state.amtPaid} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Debt :</label></span>
                            <span className="col75"><input type="text" className="inputBox" name="debt"
                                placeholder="  in rupees" value={this.state.debt} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Phone No :</label></span>
                            <span className="col75"><input type="number" className="inputBox" name="phoneNo" value={this.state.phoneNo} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <div className="">
                            <span className="col25"><label className="bFont">Date :</label></span>
                            <span className="col75"><input type="Date" name="date" className="inputBox" placeholder="Date" value={this.state.date} onChange={this.handleInputChange} />
                            </span>
                        </div>
                        <button type="submit" className="btn btn-info btn-sm">Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment >);
    }
}

export default AddLoan;
