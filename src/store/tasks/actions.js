import {URL} from "../../url";
import {loadDashboard} from "../dashboard/actions";

export const TASKS_LOADED = 'tasks/loaded'
export const UPDATE_TASK = 'update_task'
export const DELETE_TASK = 'delete_task'

export const loadTasks = (listId) => (dispatch) => {
    fetch(URL + `lists/${listId}`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}

export const updateTask = (item) => (dispatch) => {
		fetch(URL + `lists/${item.todoListId}/${item.id}`, {
				method: 'PATCH',
				headers:  {
						'Content-Type': 'application/json-patch+json'
				},
				body: JSON.stringify([{
						op : "replace",
						path : "/done",
						value : !item.done
				}])
		})
				.then(() => dispatch({
						type: UPDATE_TASK,
						listId: item.todoListId,
						item,
		}))
}

export const deleteTask = (item) => (dispatch) => {
		return fetch(URL + `lists/${item.todoListId}/${item.id}`, {
				method: 'DELETE',
		})
				.then(() => dispatch({
						type: DELETE_TASK,
						listId: item.todoListId,
						item,
		}))
}