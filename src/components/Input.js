import React from "react";

const Input = ({inputHandler}) => {
    return (
        <input
            id="autocompleteSearch"
            onChange={(e) => inputHandler(e.target.value)}/>
    )
}

export default Input