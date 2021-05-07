import React, {useEffect, useState} from 'react';
import SelectListButton from "./SelectListButton/SelectListButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadDashboard } from "../../store/dashboard/actions";


const Dashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDashboard())
    }, [])

    const state = useSelector(state => state.dashboard)
    console.log(state)

    return (
        <aside>
            <h3>Your Lists</h3>
            <ul>
                <li><h4>Choose one:</h4></li>
                {
                    state.lists && state.lists.length
                        ? state.lists.map((list, i) => <SelectListButton key={i} list={list} /> )
                        : "You have not lists"
                }
                {/*<li>*/}
	            {/*    <Link to="/today">*/}
		        {/*        <button>Today</button>*/}
	            {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </aside>
    );
};

export default Dashboard;