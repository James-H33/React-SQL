import React from "react";

export class UserList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h6>Hello from the user list</h6>
                {this.props.data.userList.map((user) => <li key={user.id}>{user.name}</li>)}
            </div>
        );
    }
};
