import React, { Component } from "react";

class NewItemForm extends Component {

    state = {};

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onChange = (event) => {
        this.setState({
            title: event.currentTarget.title.value,
            description: event.currentTarget.description.value,
            date: new Date(event.currentTarget.date.value),
        })
    }

    render() {
        return (
            <form
                id="create-item-form"
                onSubmit={this.onSubmitHandler}
                onChange={this.onChange}
                autoComplete="off">
                <input name="title" type="text"/>
                <input name="description" type="text"/>
                <input name="date" type="date"/>
                <button type="submit">Add</button>
            </form>
        )
    }

}

export default NewItemForm;