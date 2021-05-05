import React from "react";
import TodoItem from "../TodoListPage/TodoItem/TodoItem";

const TodayTasksPage = ({ todoList, dispatch }) => {
    const now = new Date(Date.now());
    return (
        <div id="today" >
            { todoList && todoList.length
                        ? todoList.filter(item => item.date.toDateString() === now.toDateString())
                                 .map((item, i) => <TodoItem item={item} key={i} dispatch={dispatch} />)
                        : <p>There are no one task for today</p>
            }
        </div>
    )
}

export default TodayTasksPage;