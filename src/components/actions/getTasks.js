import { GET_TASKS } from "./types";

export const getTasks = (options) => (dispatch) => {
    dispatch({
        type: GET_TASKS,
        payload: options
    })
}