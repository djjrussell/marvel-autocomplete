import React from 'react'
import toolbox from './../assets/recent/11.png'
import otherTool from './../assets/recent/22.png'

const RecentlyViewed = () => {
    return (
        <section>
            <article id="recentlyViewed">
                <div id="recentlyViewedHeader">
                    <h2 style={{textAlign: 'left'}}>Recently Viewed</h2>
                    <h2 style={{textAlign: 'right', color: '#083'}}>View all</h2>
                </div>
                <div id="recentlyViewedGallery">
                    <img src={toolbox} />
                    <img src={otherTool} />
                    <img src={otherTool} />
                </div>
            </article>
        </section>
    )
};

export default RecentlyViewed;