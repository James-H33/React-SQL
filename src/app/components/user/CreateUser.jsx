import React from "react";


export class CreateUser extends React.Component {



    render() {
        return (
            <div>
                <h2>Create User Time</h2>
                <div className="row form-group mb-3">
                    <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="row form-group mb-3">
                    <input type="text" name="address" placeholder="Address" />
                </div>
                <div className="row form-group mb-3">
                    <input type="text" name="city" placeholder="City" />
                </div>
                <div className="row form-group mb-3">
                    <input type="text" name="state" placeholder="State" />
                </div>
                <div className="row form-group mb-3">
                    <input type="text" name="zip" placeholder="Zip" />
                </div>
            </div>
        );
    }
}
