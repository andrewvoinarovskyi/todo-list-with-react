import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {ADD_TASK, addNewTask} from "../store/tasks/actions";

function NewItemForm ({ listId }) {

    const [item, setItem] = useState({
        title: '',
        description: '',
        date: '',
    });

    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addNewTask(item, listId));
        event.currentTarget.reset();
    }

    return (
        <form
          id="new-item-form"
          onSubmit={onSubmitHandler}
          onChange={(event) => {
              const {title, description, date} = event.currentTarget;
              setItem({
                  title: title.value,
                  description: description.value,
                  date: date.value && new Date(date.value)
              })
          }}
          autoComplete="off">
              <input name="title" type="text" required placeholder="Title" />
              <input name="description" type="text" placeholder="Description" />
              <input name="date" type="date" />
              <button type="submit">Add</button>
        </form>
    )
}

export default NewItemForm;