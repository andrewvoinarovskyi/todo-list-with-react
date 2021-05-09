import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../store/tasks/actions";

const TodoItem = ({ item }) => {
    const { done, title, description, dueDate } = item;
    const date = dueDate !== null ? new Date(dueDate).toDateString() : null;
    const dispatch = useDispatch();
    return (
        <div className="item">
            <input
                type="checkbox"
                className="checkbox"
                checked={!!done}
                onChange={() => dispatch(updateTask(item))} />
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="date">{date}</p>
            <button className="delete" onClick={() => dispatch(deleteTask(item))} >{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;