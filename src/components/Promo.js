import React from 'react'

const Promo = ({src, idToAdd=''}) => {
    return (
        <section id={idToAdd} className="promo-container">
            <img src={src} />
        </section>
    )
}

export default Promo