import React from 'react';
import { Link } from 'react-router-dom'


const SelectListButton = ({list, getListId}) => {

    return (
        <li>
            <button onClick={() => getListId(list.id)} >{list.title}</button>
        </li>
    );
};

export default SelectListButton;