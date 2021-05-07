import {URL} from "../../url";

export const TASKS_LOADED = 'tasks/loaded'

export const loadTasks = (listId) => (dispatch) => {
    fetch(URL + `lists/${listId}`)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
}