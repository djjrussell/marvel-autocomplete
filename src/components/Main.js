import React, { useState } from 'react'
import Input from "./Input";
import SearchItems from './SearchItems'
import { KEYS } from "../constants";
import MD5 from "crypto-js/md5";

const Main = () => {

    const [inputValue, setInputValue] = useState('');

    const getHeroNames = (input) => {
        const timestamp = new Date().getTime()
        const hash = MD5(timestamp + KEYS.privateKey + KEYS.publicKey).toString()
        const website = "http://gateway.marvel.com/v1/public/characters?nameStartsWith="
        fetch(`${website}${input}&ts=${timestamp}&apikey=${KEYS.publicKey}&hash=${hash}`,
            {
                method: 'GET',
            })
            .then((response) => {
                return response.json()
            }).then(data => {
                debugger;
                return data;
        })
    }

    const heroes = inputValue !== '' ? getHeroNames(inputValue) : []

    return (
        <React.Fragment>
            <Input inputHandler={setInputValue}/>
            <SearchItems heroes={heroes}/>
        </React.Fragment>
    )
}
export default Main
