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
 import TodoListPage from "./components/TodoListPage/TodoListPage";
 import Dashboard from "./components/Dashboard/Dashboard";
 import TodayTasksPage from "./components/TodayTasksPage/TodayTasksPage";


function App() {

    const [todoList, dispatch] = useReducer(reducer, {
        lists: [
            { id: 1, title: "first list" },
            { id: 2, title: "second list" }
        ],
        tasks: [
            {listId: 1, id: 1, done: false, title: 'bla bla', description: 'some new description', date: new Date(2021, 10, 22)},
            {listId: 1, id: 2, done: true, title: 'second title', description: 'without description', date: new Date(2021, 10, 21)},
            {listId: 1, id: 3, done: false, title: 'Use React', description: '', date: new Date(2021, 10, 20)},
            {listId: 2, id: 1, done: false, title: 'bla bla', description: 'some new description', date: new Date(2021, 10, 22)},
            {listId: 2, id: 2, done: false, title: 'second title', description: 'without description', date: new Date(2021, 10, 21)},
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
