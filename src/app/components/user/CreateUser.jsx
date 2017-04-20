import React from "react";


export class CreateUser extends React.Component {

    constructor() {
        super();
        this.state = {
            fullName: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    }

    createNewUser(e) {
        this.sendNewUserNetworkRequest();
    }

    updateInputState(e) {
        var valueObject = {};
        valueObject[e.target.name] = e.target.value;
        this.setState(valueObject);
    }

    sendNewUserNetworkRequest() {
        var requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json; charset=utf-8");

        fetch("http://localhost:9000/api/user/create", {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h2>Create User Time</h2>
                <div className="row form-group mb-3">
                    <input onChange={this.updateInputState.bind(this)} value={this.state.fullName} type="text" name="fullName" placeholder="Full Name" />
                </div>
                <div className="row form-group mb-3">
                    <input onChange={this.updateInputState.bind(this)} value={this.state.address} type="text" name="address" placeholder="Address" />
                </div>
                <div className="row form-group mb-3">
                    <input onChange={this.updateInputState.bind(this)} value={this.state.city} type="text" name="city" placeholder="City" />
                </div>
                <div className="row form-group mb-3">
                    <input onChange={this.updateInputState.bind(this)} value={this.state.state} type="text" name="state" placeholder="State" />
                </div>
                <div className="row form-group mb-3">
                    <input onChange={this.updateInputState.bind(this)} value={this.state.zip} type="text" name="zip" placeholder="Zip" />
                </div>
                <div className="row form-group mb-3">
                    <button className="js-submit-user" onClick={this.createNewUser.bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
}
