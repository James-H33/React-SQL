import React from "react";

export class Todo extends React.Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            title: props.data.title,
            todoList: props.data.todoList
        }
    }

    // renderCurrentTodoList() {
    //     let list = this.props.data.todoList;
    //     return (
    //         list.map((todo, key) => <li key={key}>{todo}</li>)
    //     );
    // }

    render() {
        console.log(this.props);
        return (
            <div className="todo-list">
                {this.props.data.todoList.map((todo, key) => <li key={todo.id}>{todo.todo}</li>)}
            </div>
        );
    }
}
