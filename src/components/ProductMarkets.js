import React from 'react'
import ProductMarket from "./ProductMarket";
import { PRODUCT_MARKETS } from '../constants'

import dataCom from './../assets/img/datacomm.png'
import hvac from './../assets/img/hvac.png'
import industrial from './../assets/img/industrial.png'
import lighting from './../assets/img/lighting.png'
import energy from './../assets/img/energy.png'
import utility from './../assets/img/utility.png'


const ProductMarkets = () => {

    return (
        <section id="productMarkets">
            <ProductMarket src={dataCom} text={PRODUCT_MARKETS.datacom} />
            <ProductMarket src={hvac} text={PRODUCT_MARKETS.hvac} />
            <ProductMarket src={industrial} text={PRODUCT_MARKETS.industrial} />
            <ProductMarket src={lighting} text={PRODUCT_MARKETS.lighting} />
            <ProductMarket src={energy} text={PRODUCT_MARKETS.energy} />
            <ProductMarket src={utility} text={PRODUCT_MARKETS.utility} />
        </section>
    )
};

export default ProductMarkets;