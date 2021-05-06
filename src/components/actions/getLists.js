import { GET_LISTS } from "./types";

export const getTasks = (options) => (dispatch) => {
    dispatch({
        type: GET_LISTS,
        payload: options
    })
}