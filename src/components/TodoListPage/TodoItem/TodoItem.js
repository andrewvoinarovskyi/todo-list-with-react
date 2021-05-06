import React, {useState} from "react";

const TodoItem = ({item, dispatch}) => {
    const { done, title, description, dueDate } = item;
    const [date, setDate] = useState()
    if (dueDate !== null) {
        const date = new Date(dueDate);
        setDate(date);
    } else {
        setDate('');
    }

    return (
        <div className="item">
            <input
                type="checkbox"
                className="checkbox"
                checked={!!done}
                onChange={() => dispatch({type: 'updateTodoItem', item})}/>
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="date">{date}</p>
            <button className="delete" onClick={() => dispatch({type: 'deleteTodoItem', item})}>{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;