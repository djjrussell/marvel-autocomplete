import React from 'react'
import Input from "./Input";
import SearchItems from './SearchItems'
import {KEYS} from "../constants";
import MD5 from "crypto-js/md5";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ' ',
            heroes: [],
        };
        this.setInput = this.setInput.bind(this)
        this.setHeroes = this.setHeroes.bind(this)
    }

    setInput(input) {
        this.setState({inputValue: input})
        if(input === '') {
            this.setHeroes([])
        }
    }

    setHeroes(heroes) {
        if(
            JSON.stringify(this.state.heroes)
            !== JSON.stringify(heroes)
        ) {
            this.setState({heroes: heroes})
        }
    }

    getHeroNames() {
        const timestamp = new Date().getTime()
        const hash = MD5(timestamp + KEYS.privateKey + KEYS.publicKey).toString()
        const website = "http://gateway.marvel.com/v1/public/characters?nameStartsWith="
        fetch(`${website}${this.state.inputValue}&ts=${timestamp}&apikey=${KEYS.publicKey}&hash=${hash}`,
            {
                method: 'GET',
            })
            .then((response) => {
                return response.json()
            }).then(data => {
            if(data.data) {
                this.setHeroes(data.data.results)
            }
        })
    }

    componentDidUpdate() {
        this.getHeroNames();
    }

    render() {
        return (
            <React.Fragment>
                <Input inputHandler={this.setInput}/>
                {this.state.heroes && (
                    <SearchItems stringToBold={this.state.inputValue} heroes={this.state.heroes}/>
                )}
            </React.Fragment>
        )
    }
}

export default Main
