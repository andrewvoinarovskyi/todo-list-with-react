import React from 'react';

const SelectListButton = (props) => {
    return (
        <li>
            <button id={props.id} >{props.title}</button>
        </li>
    );
};

export default SelectListButton;