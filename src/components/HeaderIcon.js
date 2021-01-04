import React from 'react'

const HeaderIcon = ({src, classes}) => {
    return (
        <span  className={classes}>
            <img src={src}  alt='logo'/>
        </span>
    )
}

export default HeaderIcon