import React, { useState } from "react";

function NewItemForm ({ listId, onSubmit }) {
    const [id, setId] = useState(4);

    const [todoItem, setItem] = useState({
        title: '',
        description: '',
        date: '',
        });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(listId)
        onSubmit({type: 'addTodoItem', listId, id, item: todoItem});
        event.currentTarget.reset();
        setId(id + 1);
    }

    return (
        <form
          id="new-item-form"
          className="item"
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