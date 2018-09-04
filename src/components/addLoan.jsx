import React, { Component } from 'react';
class AddLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            village: "",
            typeOfJwel: "silver",
            weight: ""
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
            <form className="mT10 center" onSubmit={this.handleSubmit}>
                <label className="">
                    Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Village:
                <input type="text" name="village" value={this.state.village} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Type of Jwel:
                <select name="typeOfJwel" value={this.state.typeOfJwel} onChange={this.handleInputChange}>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="diamond">Diamond</option>
                        <option value="platinum">Platinum</option>
                    </select>
                </label>
                <br />
                <label>
                    Weight:
                <input type="text" name="weight" value={this.state.weight} onChange={this.handleInputChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>);
    }
}

export default AddLoan;
