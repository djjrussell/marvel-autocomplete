import React, {useState, useEffect} from 'react'
import SearchItems from './SearchItems'
import {KEYS} from "../constants";
import MD5 from "crypto-js/md5";
import {
    isTablet,
    isMobileOnly,
} from "react-device-detect";
import Header from "./Header";
import Menu from "./Menu";
import ActionItems from "./ActionItems";
import Promo from "./Promo";
import deal from "../assets/panel/deal.png";
import plattPlus from "../assets/img/platt-plus.png";
import PromoFooter from "./PromoFooter";
import RecentlyViewed from "./RecentlyViewed";
import FooterTiles from "./FooterTiles";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";
import ProductMarkets from "./ProductMarkets";

const Main = () => {

    const [inputValue, setInputValue] = useState('');
    const [heroes, setHeroes] = useState([])
    const [selected, setSelected] = useState('')

    let typingTimer;
    const doneTypingInterval = 200;

    const inputHandler = (input) => {
        clearTimeout(typingTimer);
        if (input || input === '') {
            typingTimer = setTimeout(() => {
                setInputValue(input)
                setSelected('')
                if (input === '') {
                    setHeroes([])
                }
            }, doneTypingInterval)
        }
    }

    const clickHandler = (clicked) => {
        setHeroes([]);
        setSelected(clicked);
        setInputValue(clicked)
    }

    const heroesHandler = (newHeroes) => {
        if (
            JSON.stringify(newHeroes) !== JSON.stringify(heroes)
        ) {
            setHeroes(newHeroes);
        }
    }

    const getHeroNames = () => {
        if (inputValue === '' || selected !== '') {
            return
        }
        const timestamp = new Date().getTime()
        const hash = MD5(timestamp + KEYS.privateKey + KEYS.publicKey).toString()
        const website = "https://gateway.marvel.com/v1/public/characters?nameStartsWith="
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
            <Header selected={selected} inputHandler={inputHandler}/>
            {heroes && heroes.length > 0 && (
                <SearchItems clickHandler={clickHandler} stringToBold={inputValue} heroes={heroes}/>
            )}
            <Menu/>
            <ActionItems/>
            <ProductMarkets/>
            <Promo idToAdd="todaysDeal" src={deal}/>
            <RecentlyViewed/>
            <Promo idToAdd="plusMemberPromo" src={plattPlus}/>
            {isMobileOnly && (
                <PromoFooter
                    buttonText="Learn More"
                    styleObj={
                        {
                            textAlign: 'center',
                            margin: '-5px auto',
                            fontWeight: 'bold',
                            width: '95%',
                            backgroundColor: 'white',
                            boxShadow: '0 0 10px grey',
                        }
                    }
                    text={
                        [
                            'Get Started Today',
                            <br/>, 'Become a ',
                            <span style={{color: '#083'}}>Platt Plus</span>,
                            ' Member.'
                        ]
                    }
                />)
            }
            { isTablet && (
                <PromoFooter
                    buttonText="Learn More"
                    styleObj={
                        {
                            textAlign: 'center',
                            marginLeft: '0',
                            display: 'inline-block',
                            fontWeight: 'bold',
                            width: '40%',
                            backgroundColor: 'white',
                            height: '136px',
                            verticalAlign: 'top',
                        }
                    }
                    text={
                        [
                            'Get Started Today',
                            <br/>, 'Become a ',
                            <span style={{color: '#083'}}>Platt Plus</span>,
                            ' Member.'
                        ]
                    }
                />)
            }
            <FooterTiles/>
            <FooterBanner/>
            <Footer/>
        </React.Fragment>
    )
}
export default Main
