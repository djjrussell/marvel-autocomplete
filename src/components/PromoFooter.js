import React from "react";

const PromoFooter = (
    {
        styleObj,
        actionable = true,
        buttonText,
        text,
    }
) => {

    return (
        <section style={styleObj}>
            <div className='promo-footer-text'>{text}</div>
            {actionable && (
                <button className="promoFooterButton">{buttonText}</button>
            )}
        </section>
    )
}

export default PromoFooter;