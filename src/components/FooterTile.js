import React from 'react'

const FooterTile = (
    {
        text,
        src,
    }
) => {
    return (
        <div className="footerTile">
            <img src={src}/>
            <div>
                {text}
            </div>
        </div>
    )
};

export default FooterTile;