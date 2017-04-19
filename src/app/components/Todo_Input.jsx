import React from "react";
import { Todo } from "./Todo";

export class Todo_Input extends React.Component {

    constructor() {
        super();

        this.state = {
            title: "todos",
            newTodo: "",
            todoList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/todos/get", {method: "GET"})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.updateStateHandler({todoList: res});
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    updateTodoInputValueHandler(e) {
        console.log(e.target.value);
        this.updateStateHandler({newTodo: e.target.value});
    }

    updateStateHandler(data) {
        this.setState(data);
    }

    saveNewTodoHandler(e) {
        console.log(this.props);
        console.log(this.state);
        if(e.keyCode === 13) {
            var newList = this.state.todoList;
            newList.push({todo: this.state.newTodo, id: this.state.todoList.length});
            this.updateStateHandler({todoList: newList});
        }
    }

    saveNewTodoInDatabase() {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2>{this.state.title}</h2>
                    <input className="new-todo" type="text"
                        value={this.state.newTodo}
                        placeholder="What do need to do?"
                        onKeyDown={this.saveNewTodoHandler.bind(this)}
                        onChange={this.updateTodoInputValueHandler.bind(this)}
                    />
                </div>
                <div className="row">
                    <Todo data={this.state}  />
                </div>
            </div>
        );
    }
}
