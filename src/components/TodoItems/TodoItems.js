import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const TodoItems = (props) => {
    const todoItems = props.todoItems;
    return (
        <div id="list">
            { todoItems.length ? todoItems.map(item => <TodoItem item={item} key={item.id} />)
                               : <p>There are no one task here</p>
            }
        </div>
    )
}

export default TodoItems;