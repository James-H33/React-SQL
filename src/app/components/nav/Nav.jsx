import React from "react";
import {Link} from "react-router";

export const Nav = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to={"/home"} className="navbar-brand" href="#">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={"/user"} activeStyle={{color: "red"}} className="nav-link" href="#">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/create_user"} activeClassName={"active"} className="nav-link" href="#">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
