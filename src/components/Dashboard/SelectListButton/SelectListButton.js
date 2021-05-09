import React from 'react';
import { Link } from 'react-router-dom'


const SelectListButton = ({ list }) => {
    return (
        <li>
            <Link to={'/todo-list/' + list.id}>
                <button>{list.title}</button>
            </Link>
        </li>
    );
};

export default SelectListButton;