import React from "react";

const Input = ({inputHandler}) => {
    return (
        <input
            id="autocompleteSearch"
            onInput={(e) => inputHandler(e.target.value)}/>
    )
}

export default Input