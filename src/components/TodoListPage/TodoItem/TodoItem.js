import React, {useState} from "react";

const TodoItem = ({item}) => {
    const { done, title, description, dueDate } = item;
    const date = dueDate !== null ? new Date(dueDate).toDateString() : null;
    return (
        <div className="item">
            <input
                type="checkbox"
                className="checkbox"
                checked={!!done}
                /*onChange={() => dispatch({type: 'updateTodoItem', item})}*//>
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="date">{date}</p>
            <button className="delete" /*onClick={() => dispatch({type: 'deleteTodoItem', item})}*/>{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;