import React from 'react'
import MenuItem from "./MenuItem";
import { MENU_TEXT } from '../constants'

import allCategories from './../assets/ic/black/ic_categories.png'
import myCatalog from './../assets/ic/black/ic_playlist_add_check.png'
import myList from './../assets/ic/black/ic_list.png'
import liveHelp from './../assets/ic/green/ic_chat - active.png'
import pim from './../assets/ic/black/ic_check_circle.png'
import avatar from './../assets/ic/black/ic_avatar.png'
import branchLocations from './../assets/ic/black/ic_place.png'

const Menu = () => {
    return (
        <ul id="menuContainer">
            <MenuItem isMain={true} border="bottom" src={allCategories} text={MENU_TEXT.allCategories} styleObject={{fontWeight: 'bold'}}/>
            <MenuItem border="bottom" src={myCatalog} text={MENU_TEXT.myCatalog} />
            <MenuItem border="bottom" src={myList} text={MENU_TEXT.myList} />
            <MenuItem border="bottom" src={liveHelp} text={MENU_TEXT.liveHelp} />
            <MenuItem border="bottom" src={pim} text={MENU_TEXT.pim} />
            <MenuItem border="bottom" src={avatar} text={MENU_TEXT.account} />
            <MenuItem src={branchLocations} text={MENU_TEXT.branchLocations} />
        </ul>
    )
}

export default Menu;