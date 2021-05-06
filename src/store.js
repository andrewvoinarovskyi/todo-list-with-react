import { createStore } from "redux";
import thunk from 'redux-thunk'

import {rootReducer} from "./store/index";

const store = createStore(
    rootReducer,
    localStorage.state && JSON.parse(localStorage.state),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store;