import {TASKS_LOADED, UPDATE_TASK, DELETE_TASK, ADD_TASK} from './actions'


const tasksReducer = (lists={}, { type, listId, tasks, item }) => {
    switch (type) {
        case TASKS_LOADED:
            return {
                ...lists,
                [listId]: tasks
            }
	      case UPDATE_TASK:
		        const listForUpdate = lists[`${listId}`].filter(task => task !== item);
		        const index = lists[listId].indexOf(item);
		        const taskForUpdate = lists[listId].filter(task => task === item)[0];
		        listForUpdate.splice(index, 0, {...taskForUpdate, done: !taskForUpdate.done})
		        return {
			          ...lists,
			          [listId]: listForUpdate,
		        }
	      case DELETE_TASK:
		        const listWithoutDeleted = lists[`${listId}`].filter(task => task !== item);
		        return {
	    	    	  ...lists,
			          [listId]: listWithoutDeleted
		        }
	      case ADD_TASK:
	      	  return {
	      	  	  ...lists,
			          [listId]: [...lists[listId], item],
		        }

        default:
            return lists;
    }
}

export default tasksReducer;