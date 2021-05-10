import { URL } from "../../url";

export const TASKS_LOADED = 'tasks/loaded'
export const UPDATE_TASK = 'update_task'
export const DELETE_TASK = 'delete_task'
export const ADD_TASK = 'add_task'
export const LOAD_TODAY = 'collection/today'

export const loadTasks = (listId) => (dispatch) => {
    fetch(URL + `lists/${listId}`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}

export const updateTask = (item, isToday) => (dispatch) => {
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
				.then(res => res.json())
				.then(() => dispatch({
						type: UPDATE_TASK,
						listId: isToday ? 'today' : item.todoListId,
						item,
		}))
}

export const deleteTask = (item, isToday) => (dispatch) => {
		return fetch(URL + `lists/${item.todoListId}/${item.id}`, {
				method: 'DELETE',
		})
				.then(() => dispatch({
						type: DELETE_TASK,
						listId: isToday ? 'today' : item.todoListId,
						item,
		}))
}

export const addNewTask = (item, listId) => (dispatch) => {
		return fetch(URL + `lists/${listId}`, {
				method: 'POST',
				headers:  {
						'Content-Type': 'application/json-patch+json'
				},
				body: JSON.stringify(item)
		})
				.then(res => res.json())
				.then((task) => dispatch({
						type: ADD_TASK,
						listId,
						item: task,
				}))
}

export const loadTodayTasks = () => (dispatch) => {
		fetch(URL + 'collection/today')
				.then(res => res.json())
				.then(tasks => dispatch({
						type: LOAD_TODAY,
						tasks
				}))
}