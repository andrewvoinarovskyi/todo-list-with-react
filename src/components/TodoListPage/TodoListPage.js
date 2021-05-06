import React, {useEffect, useCallback} from "react";

import TodoItem from "./TodoItem/TodoItem";
import NewItemForm from "../NewItemForm";

const TodoListPage = ({ todoList, listId, dispatch }) => {

    const handler = useCallback(({type, data}) => {
        dispatch({type, data});
    }, [dispatch]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/lists/' + listId)
            .then(response => response.json())
            .then(data => handler({type: 'getTasks', data}))
            .catch(() => console.log("can`t get tasks"))
        return () => dispatch({type: 'getTasks', data: []})
        },
        [listId]
    );

    return (
        <div id="list">
            { todoList && todoList.length ? todoList.map((item, i) => <TodoItem item={item} key={i} dispatch={dispatch} />)
                                : <p>There are no one task here</p>
            }
            <NewItemForm onSubmit={dispatch} listId={listId}/>
        </div>
    )
}

export default TodoListPage;