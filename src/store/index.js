import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dashboardReducer from './dashboard/reducer';
import tasksReducer from './tasks/reducer';

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;