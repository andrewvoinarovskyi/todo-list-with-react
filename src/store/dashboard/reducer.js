import { DASHBOARD_LOADED } from './actions';
import { combineReducers } from "redux";

function openedTasksReducer(state = {}, action) {
    return state
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.count : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.dashboards : lists,
    openedTasks: openedTasksReducer
})