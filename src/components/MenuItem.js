import React from 'react'
import arrow from './../assets/ic/black/ic_arrow_forward.png'

const MenuItem = ({src, text, border, styleObject = {}, isMain = false}) => {

    const classToAddBorder = border === "bottom" ? "border-bottom" : border === "top" ? "border-top" : ""
    const classToAddMain = isMain ? 'main-menu-item' : ""
    const classList = `menu-item ${classToAddBorder} ${classToAddMain}`

    return (
        <li className={classList} style={styleObject}>
            <img src={src}/>
            <h2>{text}</h2>
            <img className="menu-arrow" src={arrow}/>
        </li>
    )
}

export default MenuItem