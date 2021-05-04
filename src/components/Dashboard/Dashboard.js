import React from 'react';
import SelectListButton from "./SelectListButton/SelectListButton";
import {Link} from "react-router-dom";

const Dashboard = (props) => {
    const todoLists = props.todoLists;
    const getListById = props.getListById;

    return (
        <aside>
            <h3>Your Lists</h3>
            <ul>
                <li><h4>Choose one:</h4></li>
                {
                    todoLists && todoLists.length
                        ? todoLists.map((list, i) => <SelectListButton key={i} list={list} getListById={getListById} />)
                        : "You have not lists"
                }
                <li>
	                <Link to="/today">
		                <button></button>
	                </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Dashboard;