import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Root } from "./components/Root";
import { User } from "./components/user/User";
import { CreateUser } from "./components/user/CreateUser";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path={"user"} component={User}/>
                    <Route path={"create_user"} component={CreateUser}/>
                </Route>
            </Router>
        );
    }

}

render(<App/>, window.document.querySelector("#app"));
