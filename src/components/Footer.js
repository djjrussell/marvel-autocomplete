import React from 'react'
import { FOOTER_TEXT } from '../constants'
import comment from './../assets/ic/black/ic_comment.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div id="footerHeader">{FOOTER_TEXT.header}</div>
            <div id="footerAddress">{FOOTER_TEXT.address}</div>
            <div id="footerPhone">{FOOTER_TEXT.phone}</div>
            <div id="footerHours">{FOOTER_TEXT.hours}</div>
            <div id="footerDays">{FOOTER_TEXT.days}</div>
            <button id="footerButton">
                <img src={comment}/>
                <span id="footerButtonText">{FOOTER_TEXT.buttonText}</span>
            </button>
            <div id="footerFooter">
                <span className="footerFooterText">{FOOTER_TEXT.contact}</span>
                <span className="footerFooterText">{FOOTER_TEXT.whatsNew}</span>
                <span className="footerFooterText">{FOOTER_TEXT.faq}</span>
            </div>
        </footer>
    )
};

export default Footer;