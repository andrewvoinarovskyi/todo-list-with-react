import React, { useEffect } from "react";
import TodoItem from "../TodoListPage/TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_ARRAY } from "../TodoListPage/TodoListPage";
import { loadTodayTasks } from "../../store/tasks/actions";


const TodayTasksPage = () => {
		const dispatch = useDispatch();
		const lists = useSelector(state => state.dashboard.lists)
		useEffect(() => {
				dispatch(loadTodayTasks())
		}, [lists])
		const todayTasks = useSelector(state => state.tasks.today)
    return (
        <div id="today">
	          {
		          todayTasks && todayTasks.length
			            ? todayTasks.map(item => <TodoItem item={item} key={item.id} list={lists.filter(list => list.id === item.todoListId)[0]} />)
			            : <p>There are no one task for today</p>
            }
        </div>
    )
}

export default TodayTasksPage;