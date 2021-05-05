import React from 'react';
import SelectListButton from "./SelectListButton/SelectListButton";
import { Link } from "react-router-dom";

const Dashboard = ({todoList, getListId}) => {

    return (
        <aside>
            <h3>Your Lists</h3>
            <ul>
                <li><h4>Choose one:</h4></li>
                {
                    todoList.lists && todoList.lists.length
                        ? todoList.lists.map((list, i) => <SelectListButton key={i} list={list} getListId={getListId} />)
                        : "You have not lists"
                }
                <li>
	                <Link to="/today">
		                <button>Today</button>
	                </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Dashboard;