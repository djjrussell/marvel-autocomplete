import React from 'react'

const FooterTile = (
    {
        text,
        src,
    }
) => {
    return (
        <div className="footerTile">
            <img className="footerTileImage" src={src}/>
            <div className="footer-tile-text">
                {text}
            </div>
        </div>
    )
};

export default FooterTile;