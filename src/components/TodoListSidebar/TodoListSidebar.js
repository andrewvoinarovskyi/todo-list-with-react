import React, {useState} from 'react';
import SelectListButton from "./SelectListButton/SelectListButton";

const TodoListSidebar = (props) => {
    const [selectedList, setSelectedList] = useState('');
    const [onSelect, selectTodoList] = useState(0);
    const todoLists = props.todoLists;

    return (
        <aside>
            <h3>Your Lists</h3>
            <ul>
                {todoLists && todoLists.length ? todoLists.map(list => <SelectListButton id={list.id} title={list.title} />) : "You have not lists"}
            </ul>
        </aside>
    );
};

export default TodoListSidebar;