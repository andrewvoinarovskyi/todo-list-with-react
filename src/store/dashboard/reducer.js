import { DASHBOARD_LOADED } from './actions'
import { combineReducers } from "redux";

function openedTasksReducer(state = {}, action) {
    return {}
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})