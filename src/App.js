 import './App.css';
 import { useEffect, useReducer, useState, useCallback } from "react";
 import {
	 BrowserRouter as Router,
	 Switch,
	 Route,
	 Link,
	 useParams
 } from "react-router-dom";

 import reducer from './components/reducer/Reducer'

 import NewItemForm from "./components/NewItemForm";
 import TodoListPage from "./components/TodoListPage/TodoListPage";
 import Dashboard from "./components/Dashboard/Dashboard";
 import TodayTasksPage from "./components/TodayTasksPage/TodayTasksPage";


function App() {

    const [todoList, dispatch] = useReducer(reducer, {
        lists: [],
        tasks: [],
    });

    useEffect(() => {
        fetch("http://127.0.0.1:5000")
            .then(response => response.json())
            .then(data => dispatch({type: 'getLists', data}))
            .catch(() => console.log("error"))
    }, [])

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
                {/*<Route path="/todo-list/:id">*/}
                    {selectedList !== 0 &&
                              <TodoListPage todoList={ todoList.tasks } listId={selectedList} dispatch={dispatch} />
                    }
                {/*</Route>*/}
                <Route path="/today" >
                    <TodayTasksPage todoList={todoList.tasks} listId={selectedList} dispatch={dispatch} />
                </Route>
            </div>
        </section>
    );
}

export default App;
