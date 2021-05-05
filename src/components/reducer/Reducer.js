import React, {useReducer, useState} from 'react'

const reducer = (state, action) => {
    const { listId, id, item } = action;
    switch (action.type) {
        case 'addTodoItem': {
            item.id = id;
            item.listId = listId;

            console.log(item)
            return {
                lists: state.lists,
                tasks: [...state.tasks, item]
            }
        }
        case 'deleteTodoItem': {
            return {
                lists: state.lists,
                tasks: state.tasks.filter(task => task !== item),
            }
        }
        case 'updateTodoItem': {
            const tasks = state.tasks.filter(task => task !== item);
            const index = state.tasks.indexOf(item);
            const taskForUpdate = state.tasks.filter(task => task === item)[0];
            tasks.splice(index, 0, {...taskForUpdate, done: !taskForUpdate.done})
            return {
                lists: state.lists,
                tasks: tasks,
            }
        }

    }
}

export default reducer;