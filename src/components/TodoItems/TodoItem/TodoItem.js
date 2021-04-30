import React from "react";

const TodoItem = ({item, deleteItem}) => {
    const { title, description, date } = item;
    return (
        <div className="item">
            <input type="checkbox" className="checkbox"/>
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="date">{date ? date.toDateString() : ''}</p>
            <button className="delete" onClick={(event) => deleteItem(item)}>{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;