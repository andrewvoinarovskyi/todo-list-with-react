import React from 'react';
import { Link } from 'react-router-dom'


const SelectListButton = (props) => {
		const list = props.list;
		const getListById = props.getListById;

    return (
        <li>
	        <Link to="/today">
            <button onClick={() => getListById(list.id)} >{list.title}</button>
	        </Link>
        </li>
    );
};

export default SelectListButton;