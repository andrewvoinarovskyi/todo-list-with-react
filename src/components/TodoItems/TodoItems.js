import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const TodoItems = ({ todoList, selectedList, dispatch }) => {

    return (
        <div id="list">
            { todoList && todoList.length ? todoList.filter(item => item.listId === selectedList).map((item, i) => <TodoItem item={item} key={i} dispatch={dispatch} />)
                                : <p>There are no one task here</p>
            }
        </div>
    )
}

export default TodoItems;