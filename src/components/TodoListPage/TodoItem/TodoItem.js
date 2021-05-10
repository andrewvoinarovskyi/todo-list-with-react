import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../store/tasks/actions";
import { Link } from "react-router-dom";

const TodoItem = ({ item, list }) => {
		const [done, setDone] = useState(item.done)
		const isToday = !!list;
    const { title, description, dueDate } = item;
    const date = dueDate !== null ? new Date(dueDate).toDateString() : null;
    const dispatch = useDispatch();
    return (
        <div className="item">
            <input
                type="checkbox"
                className="checkbox"
                checked={!!done}
                onChange={() => {
                	  setDone(!done)
                	  dispatch(updateTask(item, isToday))
                }} />
            <p className="title">{title.toUpperCase()}</p>
            <p className="description">{description}</p>
	          { isToday &&
	              <Link to={`/todo-list/${list.id}`} >
	                  <button>{list.title}</button>
	              </Link>
	          }
            <p className="date">{date}</p>
            <button className="delete" onClick={() => dispatch(deleteTask(item))} >{'\u{1F5D1}'}</button>
        </div>
    )
}

export default TodoItem;