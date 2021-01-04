import React from 'react'
import HeaderIcon from "./HeaderIcon";
import companyLogo from './../assets/img/logo.png'
import menuLogo from './../assets/ic/white/ic_menu.png'
import personLogo from './../assets/ic/white/ic_person.png'
import shoppingCartLogo from './../assets/ic/white/ic_shopping_cart.png'
import searchLogo from './../assets/ic/white/ic_search.png'

const Header = () => {
    return (
        <header className='two-em-height position-relative background-green'>
            <HeaderIcon src={companyLogo} classes='no-left position-absolute' />
            <HeaderIcon src={menuLogo} classes='no-right position-absolute' />
            <HeaderIcon src={personLogo} classes='no-margin-right position-absolute' />
            <HeaderIcon src={shoppingCartLogo} classes='no-margin-right position-absolute' />
            <HeaderIcon src={searchLogo} classes='no-margin-right position-absolute' />
        </header>
    )
}

export default Header