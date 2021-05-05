import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import NewItemForm from "../NewItemForm";

const TodoListPage = ({ todoList, listId, dispatch }) => {

    return (
        <div id="list">
            { todoList && todoList.length ? todoList.filter(item => item.listId === listId).map((item, i) => <TodoItem item={item} key={i} dispatch={dispatch} />)
                                : <p>There are no one task here</p>
            }
            <NewItemForm onSubmit={dispatch} listId={listId}/>
        </div>
    )
}

export default TodoListPage;