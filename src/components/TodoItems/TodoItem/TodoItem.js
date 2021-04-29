import React from "react";

const TodoItem = (props) => {
    const {id, title, description, date } = props.item;
    const deleteItem = props.deleteItem;
    return (
        <div id={"item_" + id} className="item">
            <input type="checkbox" className="checkbox"/>
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="date">{date ? date.toDateString() : ''}</p>
            <button className="delete" onClick={deleteItem}>{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;