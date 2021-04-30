import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const TodoItems = (props) => {
    const todoItems = props.todoItems;
    const deleteItem = props.deleteItem;

    return (
        <div id="list">
            { todoItems && todoItems.length ? todoItems.map((item, i) => <TodoItem item={item} key={i} deleteItem={deleteItem} />)
                                : <p>There are no one task here</p>
            }
        </div>
    )
}

export default TodoItems;