import React from "react";


const SearchItems = ({heroes}) => {
    if (heroes) {
        return (
            <div id="searchItems">
                {
                    heroes.map((name) => {
                        return <div key={name}>{name}</div>
                    })
                }
            </div>
        )
    }

    return <div />
}

export default SearchItems