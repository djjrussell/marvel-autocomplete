import React, {useState, useEffect} from 'react'
import SearchItems from './SearchItems'
import {KEYS} from "../constants";
import MD5 from "crypto-js/md5";
import Header from "./Header";

const FunctionalMain = () => {

    const [inputValue, setInputValue] = useState('');
    const [heroes, setHeroes] = useState([])

    let typingTimer;
    const doneTypingInterval = 200;

    const inputHandler = (input) => {
        clearTimeout(typingTimer);
        if (input || input === '') {
            typingTimer = setTimeout(() => {
                setInputValue(input)
                if (input === '') {
                    setHeroes([])
                }
            }, doneTypingInterval)
        }
    }

    const heroesHandler = (newHeroes) => {
        if (
            JSON.stringify(newHeroes) !== JSON.stringify(heroes)
        ) {
            setHeroes(newHeroes);
        }
    }

    const getHeroNames = () => {
        if (inputValue === '') {
            return
        }
        const timestamp = new Date().getTime()
        const hash = MD5(timestamp + KEYS.privateKey + KEYS.publicKey).toString()
        const website = "http://gateway.marvel.com/v1/public/characters?nameStartsWith="
        fetch(`${website}${inputValue}&ts=${timestamp}&apikey=${KEYS.publicKey}&hash=${hash}`,
            {
                method: 'GET',
            })
            .then((response) => {
                return response.json()
            }).then(data => {
            heroesHandler(data.data.results);
        })
    }

    useEffect(() => {
        getHeroNames();
    })

    return (
        <React.Fragment>
            <Header inputHandler={inputHandler}/>
            {heroes && heroes.length > 0 && (
                <SearchItems stringToBold={inputValue} heroes={heroes}/>
            )}        
        </React.Fragment>
    )
}
export default FunctionalMain
