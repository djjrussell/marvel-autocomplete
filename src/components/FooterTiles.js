import React from 'react'
import FooterTile from "./FooterTile";

import {FOOTER_TILE_TEXT} from '../constants'
import superTool from './../assets/img/super-tool-day.png'
import locations from './../assets/img/ic_location_b.png'
import helpCenter from './../assets/img/ic_helpcenter.png'
import plattUniversity from './../assets/img/ic_platt-u.png'

const FooterTiles = () => {
    return (
        <section>
            <FooterTile src={superTool}  text={FOOTER_TILE_TEXT.superTool} />
            <FooterTile src={locations}  text={FOOTER_TILE_TEXT.locations} />
            <FooterTile src={helpCenter}  text={FOOTER_TILE_TEXT.helpCenter} />
            <FooterTile src={plattUniversity}  text={FOOTER_TILE_TEXT.plattUniversity} />
        </section>
    )
};

export default FooterTiles;