import React from 'react';
import { Link } from 'react-router-dom'
import store from "../../../store";
import { getTasks } from "../../actions/getTasks";

const SelectListButton = ({ list }) => {

    return (
        <li>
            <button onClick={() => getTasks(list.id)} >{list.title}</button>
        </li>
    );
};

export default SelectListButton;