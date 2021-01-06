import React from 'react'
import HeaderIcon from "./HeaderIcon";
import Input from './Input'
import companyLogo from './../assets/img/logo.png'
import menuLogo from './../assets/ic/white/ic_menu.png'
import personLogo from './../assets/ic/white/ic_person.png'
import shoppingCartLogo from './../assets/ic/white/ic_shopping_cart.png'
import searchLogo from './../assets/ic/white/ic_search.png'
import searchLogoBlack from './../assets/ic/black/ic_search.png'

const Header = ({inputHandler, selected}) => {
    return (
        <header className='header'>
            <HeaderIcon src={companyLogo} classes='float-left header-icon' />
            <HeaderIcon src={menuLogo} classes='float-right header-icon' />
            <HeaderIcon src={personLogo} classes='float-right header-icon' />
            <HeaderIcon src={shoppingCartLogo} classes='float-right header-icon' />
            <HeaderIcon src={searchLogo} classes='float-right header-icon' />
            <Input selected={selected} inputHandler={inputHandler} />
            <img id="searchLogo" src={searchLogoBlack} />
        </header>
    )
}

export default Header