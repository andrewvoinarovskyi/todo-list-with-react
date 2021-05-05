 import './App.css';
 import {useEffect, useReducer, useState} from "react";
 import {
	 BrowserRouter as Router,
	 Switch,
	 Route,
	 Link,
	 useParams
 } from "react-router-dom";

 import reducer from './components/reducer/Reducer'

 import NewItemForm from "./components/NewItemForm";
 import TodoItems from "./components/TodoItems/TodoItems";
 import Dashboard from "./components/Dashboard/Dashboard";

function App() {

    const [todoList, dispatch] = useReducer(reducer, {
        lists: [
            { id: 1, title: "first list" },
            { id: 2, title: "second list" }
        ],
        tasks: [
            {listId: 1, id: 1, title: 'bla bla', description: 'some new description', date: new Date(2021, 10, 22)},
            {listId: 1, id: 2, title: 'second title', description: 'without description', date: new Date(2021, 10, 21)},
            {listId: 1, id: 3, title: 'Use React', description: '', date: new Date(2021, 10, 20)},
            {listId: 2, id: 1, title: 'bla bla', description: 'some new description', date: new Date(2021, 10, 22)},
            {listId: 2, id: 2, title: 'second title', description: 'without description', date: new Date(2021, 10, 21)},
        ],
    });

    const [selectedList, setSelectedList] = useState(0);

    const getListId = (id) => {
        console.log(selectedList);
    	return setSelectedList(id);
    }

    return (
        <section>
            <header>
	            <h1>TodoList</h1>
            </header>
            <div id="root">
                <Dashboard todoList={todoList} getListId={getListId} />
	              {selectedList !== 0
                      ? <>
                            <TodoItems todoList={ todoList.tasks } selectedList={selectedList} dispatch={dispatch} />
                            <NewItemForm onSubmit={dispatch} listId={selectedList}/>
	                    </>
                      : <p>Choose todo list</p>
	              }
            </div>
        </section>
    );
}

export default App;
