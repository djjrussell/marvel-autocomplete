import React from 'react'

const ActionItem = ({src, text}) => {
    return (
        <div className="action-item-container">
            <div className="action-item-image-container">
                <img src={src}/>
            </div>
            <h3>{text}</h3>
        </div>
    )
}

export default ActionItem;