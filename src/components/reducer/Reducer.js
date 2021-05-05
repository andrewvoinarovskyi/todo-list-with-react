import React, { useReducer } from 'react'

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
                tasks: state.tasks.filter(todoItem => todoItem !== item),
            }
        }

    }
}

export default reducer;