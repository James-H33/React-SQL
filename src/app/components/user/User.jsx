import React from "react";
import { UserList } from "./UserList";

export class User extends React.Component {
    constructor() {
        super();

        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/api/user/get", {method: "GET"})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.updateTodoListData(res);
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    updateTodoListData(data) {
        this.setState({
            userList: data
        });
    }

    render() {
        return (
            <div>
                <h2>User List</h2>
                <UserList data={this.state} />
            </div>
        );
    }
}
