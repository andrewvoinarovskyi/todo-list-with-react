import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const TodoItems = ({selectedList}) => {
    const todoItems = selectedList.todoItems.todoItems;
    const deleteTodoItem = selectedList.todoItems.deleteTodoItem;

    return (
        <div id="list">
            { todoItems ? todoItems.map((item, i) => <TodoItem item={item} key={i} deleteTodoItem={deleteTodoItem} />)
                                : <p>There are no one task here or Choose list</p>
            }
        </div>
    )
}

export default TodoItems;