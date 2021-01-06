import React from 'react'
import PromoFooter from "./PromoFooter";
import {FOOTER_BANNER_TEXT} from '../constants'

const FooterBanner = () => {

    return (
        <section>
            <div id='footerBannerContainer'/>
            <PromoFooter styleObj={
                {
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'rgb(51,51,51)',
                    marginTop: '-15px',
                    padding: '1em 0',
                    width: '95%',
                }
            }
                         actionable={false}
                         text={FOOTER_BANNER_TEXT.footerBannerText}
            />
        </section>
    )
};

export default FooterBanner;