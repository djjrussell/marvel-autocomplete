import React from "react";

const Input = ({inputHandler, selected}) => {
    return (
        selected === '' ? (
            <input
                id="autocompleteSearch"
                placeholder="What are you looking for?"
                className='margin-auto'
                onInput={(e) => inputHandler(e.target.value)}
            />
            ) : (
            <input
                id="autocompleteSearch"
                placeholder="What are you looking for?"
                className='margin-auto'
                onInput={(e) => inputHandler(e.target.value)}
                value={selected}
            />
        )
    )
};

export default Input