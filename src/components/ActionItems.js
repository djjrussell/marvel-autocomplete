import React from 'react'
import ActionItem from './ActionItem'
import {ACTION_ITEM_TEXT} from "../constants";

import categories from './../assets/ic/green/ic_line_style.png'
import search from './../assets/ic/green/ic_search.png'
import scan from './../assets/ic/green/ic_scanner.png'

const ActionItems = () => {
    return (
        <section id="actionItems">
            <ActionItem src={categories} text={ACTION_ITEM_TEXT.categories}/>
            <ActionItem src={search} text={ACTION_ITEM_TEXT.search}/>
            <ActionItem src={scan} text={ACTION_ITEM_TEXT.scan}/>
        </section>
    )
};

export default ActionItems;