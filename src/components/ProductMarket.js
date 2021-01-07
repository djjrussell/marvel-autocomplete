import React from 'react'

const ProductMarket = ({src, text}) => {

    return (
        <div className="productMarket" >
            <img src={src} />
            <div className="productMarketText">{text}</div>
        </div>
    )
};

export default ProductMarket;