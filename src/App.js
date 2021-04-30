 import './App.css';
 import { useState } from "react";

 import NewItemForm from "./components/NewItemForm";
 import TodoItems from "./components/TodoItems/TodoItems";
 import TodoListSidebar from "./components/TodoListSidebar/TodoListSidebar";

 const useTodoItems = (items) => {
     const [todoItems, setTodoItems] = useState(items);
     return [
         todoItems,
         (id, item) => setTodoItems([...todoItems, {id, ...item}]),
         (item) => setTodoItems(todoItems.filter(todoItem => todoItem !== item))
     ]
 }

function App() {
    const [todoItems, setTodoItems, deleteItem] = useTodoItems([
        {id: 1, title: 'bla bla', description: 'some new description', date: new Date(2021,10,22) },
        {id: 2, title: 'second title', description: 'without description', date: new Date(2021,10,21) },
        {id: 3, title: 'Use React', description: '', date: new Date(2021,10,20) },
    ])

    const [todoLists, setTodoLists] = useState([
        { id: 1, title: "First list", todoItems: todoItems },
        { id: 2, title: "Second list" }
    ])

    return (
        <section>
            <header><h1>TodoList</h1></header>
            <div id="root">
                <TodoListSidebar todoLists={todoLists} />
                <TodoItems todoItems={todoItems} deleteItem={deleteItem} />
                <NewItemForm onSubmit={setTodoItems} />
            </div>
        </section>
    );
}

export default App;
