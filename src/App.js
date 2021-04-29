 import './App.css';
 import {Component} from "react";

 import NewItemForm from "./components/NewItemForm";
 import TodoItems from "./components/TodoItems/TodoItems";

class App extends Component {
    state = {
        todoItems: [
            {id: 1,title: 'bla bla', description: 'some new description', date: new Date(2021,10,22) },
            {id: 2,title: 'second title', description: 'without description', date: new Date(2021,10,21) },
            {id: 3,title: 'Use React', description: '', date: new Date(2021,10,20) },
        ]
    }

    deleteItem = (event) => {
        event.target.parentElement.remove();
    }

    id = 3;

    addTodoItem = (id, item) => {
        this.setState({
            todoItems: [...this.state.todoItems, { id, ...item }]
        })
    }

    render() {
        return (
            <div id="todo-list">
                <header><h1>TodoList</h1></header>
                <NewItemForm onSubmit={this.addTodoItem} />
                <TodoItems todoItems={this.state.todoItems} deleteItems={this.deleteItem} />
            </div>
        );
}
}

export default App;
