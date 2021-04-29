import React from "react";

const TodoItem = (props) => {
    const {id, title, description, date } = props.item;
    return (
        <div id={"item_" + id} className="item">
            <input type="checkbox" className="checkbox"/>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <p className="date">{date.toDateString()}</p>
            <button className="delete">{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;