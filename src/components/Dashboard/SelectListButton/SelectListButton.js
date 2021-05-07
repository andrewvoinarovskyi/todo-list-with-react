import React from 'react';
import { Link } from 'react-router-dom'
import store from "../../../store";
import { getTasks } from "../../actions/getTasks";

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