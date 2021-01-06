import React from "react";


const SearchItems = ({heroes, stringToBold, clickHandler}) => {

    const formatHeroName = (name, stringToBold) => {
        const strLength = stringToBold.length
        const removed = name.substring(0, strLength);
        const toKeep = name.substring(strLength);
        return [removed, toKeep]
    }

    if (heroes) {
        return (
            <div id="searchItems">
                {
                    heroes.map((hero) => {
                        const heroNameArray = formatHeroName(hero.name, stringToBold);
                        return <div onClick={() => clickHandler(hero.name)} key={hero.name}>
                            <b>
                                {heroNameArray[0]}
                            </b>
                            {heroNameArray[1]}
                        </div>
                    })
                }
            </div>
        )
    }

    return <div/>
}

export default SearchItems