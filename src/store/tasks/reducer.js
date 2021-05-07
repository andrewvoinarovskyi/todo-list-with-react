import { TASKS_LOADED } from './actions'

const tasksReducer = (lists={}, { type, listId, tasks }) => {
    switch (type) {
        case TASKS_LOADED:
            return {
                ...lists,
                [listId]: tasks
            }
        default:
            return lists;
    }
}

export default tasksReducer;