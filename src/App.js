 import './App.css';
 import { Route } from "react-router-dom";

 import TodoListPage from "./components/TodoListPage/TodoListPage";
 import Dashboard from "./components/Dashboard/Dashboard";
 import TodayTasksPage from "./components/TodayTasksPage/TodayTasksPage"


function App() {

    return (
        <section>
            <header>
	            <h1>TodoList</h1>
            </header>
            <div id="root">
                <Dashboard />
                <Route path="/todo-list/:id">
                      <TodoListPage />
                </Route>
                <Route path="/today" >
                    <TodayTasksPage />
                </Route>
            </div>
        </section>
    );
}

export default App;
