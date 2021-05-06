import { GET_LISTS, GET_TASKS, ADD_TASKS, DELETE_TASKS, UPDATE_TASKS } from '../actions/types'

const initialState = {
    lists: [],
    tasks: [],
}

const reducer = (state = initialState, action) => {
    const { listId, id, item } = action;
    switch (action.type) {
        case GET_LISTS: {
            return {
                lists: action.data,
                tasks: state.tasks
            }
        }
        case GET_TASKS: {
            return {
                lists: state.lists,
                tasks: action.data
            }
        }
        case ADD_TASKS: {
            item.id = id;
            item.listId = listId;

            console.log(item)
            return {
                lists: state.lists,
                tasks: [...state.tasks, item]
            }
        }
        case DELETE_TASKS: {
            return {
                lists: state.lists,
                tasks: state.tasks.filter(task => task !== item),
            }
        }
        case UPDATE_TASKS: {
            const tasks = state.tasks.filter(task => task !== item);
            const index = state.tasks.indexOf(item);
            const taskForUpdate = state.tasks.filter(task => task === item)[0];
            tasks.splice(index, 0, {...taskForUpdate, done: !taskForUpdate.done})
            return {
                lists: state.lists,
                tasks: tasks,
            }
        }
        default: return state
    }
}

export default reducer;