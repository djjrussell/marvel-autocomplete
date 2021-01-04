import React from "react";

const Input = ({inputHandler}) => {
    return (
        <input
            id="autocompleteSearch"
            placeholder="What are you looking for"
            onChange={(e) => inputHandler(e.target.value)}/>
    )
}

export default Input