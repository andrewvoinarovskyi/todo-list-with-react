 import './App.css';
 import { useState } from "react";
 import {
	 BrowserRouter as Router,
	 Switch,
	 Route,
	 Link,
	 useParams
 } from "react-router-dom";

 import NewItemForm from "./components/NewItemForm";
 import TodoItems from "./components/TodoItems/TodoItems";
 import Dashboard from "./components/Dashboard/Dashboard";

 const useTodoItems = (items) => {
     const [todoItems, setTodoItems] = useState(items);
     return {
         todoItems,
         addTodoItem: (id, item) => {
     	    setTodoItems([...todoItems, {id, ...item}])
         },
         deleteTodoItem: (item) => {
	         console.log(item);
	         return todoItems.filter(todoItem => todoItem !== item)
         },
     }
 }

function App() {
    const firstList = useTodoItems([
        {id: 1, title: 'bla bla', description: 'some new description', date: new Date(2021,10,22) },
        {id: 2, title: 'second title', description: 'without description', date: new Date(2021,10,21) },
        {id: 3, title: 'Use React', description: '', date: new Date(2021,10,20) },
    ])
	  const secondList = useTodoItems([
        {id: 1, title: 'bla bla', description: 'some new description', date: new Date(2021,10,22) },
        {id: 2, title: 'second title', description: 'without description', date: new Date(2021,10,21) },
    ])

    const [todoLists, setTodoLists] = useState([
        { id: 1, title: "First list", todoItems: firstList },
        { id: 2, title: "Second list", todoItems: secondList }
    ])

		const [selectedListId, setSelectedListId] = useState();

    const getListById = (id) => {
    	return setSelectedListId(id);
    }

		return (
        <section>
            <header>
	            <h1>TodoList</h1>
            </header>
            <div id="root">
                <Dashboard todoLists={todoLists} getListById={getListById} />
	              {selectedListId && <>
		                <TodoItems selectedList={todoLists.filter((list) => list.id === selectedListId)[0]} />
	                  <NewItemForm onSubmit={todoLists.filter((list) => list.id === selectedListId)[0].todoItems.addTodoItem} />
	                </>
	              }
            </div>
        </section>
    );
}

export default App;
