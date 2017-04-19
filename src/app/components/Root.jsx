import React from "react";
import { Nav } from "./nav/Nav";
import { User } from "./user/User";

export class Root extends React.Component {
    render() {
        return (
            <div id="rootComponent" className="">
                <div className="container mt-5">
                <Nav />
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
