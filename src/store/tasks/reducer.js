import {TASKS_LOADED, UPDATE_TASK} from './actions'

const tasksReducer = (lists={}, { type, listId, tasks, item }) => {
    switch (type) {
        case TASKS_LOADED:
            return {
                ...lists,
                [listId]: tasks
            }
	      case UPDATE_TASK:
		      const list = lists[`${listId}`].filter(task => task !== item);
		      const index = lists[listId].indexOf(item);
		      const taskForUpdate = lists[listId].filter(task => task === item)[0];
		      list.splice(index, 0, {...taskForUpdate, done: !taskForUpdate.done})
		      return {
			      ...lists,
			      [listId]: list,
		      }

        default:
            return lists;
    }
}

export default tasksReducer;