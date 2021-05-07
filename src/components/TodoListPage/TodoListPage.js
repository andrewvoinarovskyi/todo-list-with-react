import React, { useEffect } from "react";
import { loadTasks } from "../../store/tasks/actions";

import TodoItem from "./TodoItem/TodoItem";
import NewItemForm from "../NewItemForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EMPTY_ARRAY = [];

const TodoListPage = () => {

    let { id } = useParams()
    const tasks = useSelector(state => state.tasks[id] || EMPTY_ARRAY)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTasks(id))
    }, [id])

    return (
        <div id="list">
            { tasks.length ? tasks.map( item => <TodoItem item={item} key={item.id} />)
                                : <p>There are no one task here</p>
            }
            <NewItemForm listId={id}/>
        </div>
    )
}

export default TodoListPage;