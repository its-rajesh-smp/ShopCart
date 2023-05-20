import React from 'react';
import "./HeaderIcon.css"

function HeaderIcon(props) {
    return (
        <div className=' HeaderIcon-div '>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="FlipKartIcon" />
            <div>
                <p>Explore</p>
                <div>
                    <p>Plus</p>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" />
                </div>
            </div>
        </div>
    );
}

export default HeaderIcon;
