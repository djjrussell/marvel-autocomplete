import React from 'react'
import ActionItem from './ActionItem'
import {ACTION_ITEM_TEXT, PROMO_FOOTER_TEXT} from "../constants";
import PromoFooter from "./PromoFooter";

import categories from './../assets/ic/green/ic_line_style.png'
import search from './../assets/ic/green/ic_search.png'
import scan from './../assets/ic/green/ic_scanner.png'
import Promo from './Promo';
import deal from './../assets/panel/deal.png'
import plattPlus from './../assets/img/platt-plus.png'

const ActionItems = () => {
    return (
        <section id="actionItems">
            <ActionItem src={categories} text={ACTION_ITEM_TEXT.categories}/>
            <ActionItem src={search} text={ACTION_ITEM_TEXT.search}/>
            <ActionItem src={scan} text={ACTION_ITEM_TEXT.scan}/>
            {/*<Promo src={deal}/>*/}
            {/*<Promo src={plattPlus}/>*/}
            {/*<PromoFooter*/}
            {/*    buttonText="Learn More"*/}
            {/*    styleObj={*/}
            {/*        {*/}
            {/*            textAlign: 'center',*/}
            {/*            margin: '-5px auto',*/}
            {/*            fontWeight: 'bold',*/}
            {/*            width: '95%',*/}
            {/*            backgroundColor: 'white',*/}
            {/*        }*/}
            {/*    }*/}
            {/*    text={*/}
            {/*        [*/}
            {/*            'Get Started Today',*/}
            {/*            <br />, 'Become a ',*/}
            {/*            <span style={{color:'#083'}}>Platt Plus</span>,*/}
            {/*            ' Member.'*/}
            {/*        ]*/}
            {/*    }*/}
            {/*/>*/}
        </section>
    )
};

export default ActionItems;