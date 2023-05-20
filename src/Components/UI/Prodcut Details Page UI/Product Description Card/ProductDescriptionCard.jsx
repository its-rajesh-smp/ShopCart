import React from 'react';
import "./ProductDescriptionCard.css"

function ProductDescriptionCard(props) {
    return (
        <div style={props.num % 2 === 0 ? { flexDirection: "row-reverse" } : null} className=' ProductDescriptionCard-div '>
            <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/eaaa2e2ff6014f13a3dc29777ba52670_17863d09699_image.jpeg?q=90" alt="" />

            <div>
                <h2>Amolade Display</h2>
                <p>The realme 8 features a 16.3 cm (6.4) Super AMOLED display that ensures a high contrast ratio and high brightness so that you can enjoy delightful visuals. Thanks to the 180 Hz touch sampling rate, you can enjoy smooth mobile usage that will make it difficult for you to put the phone down.</p>
            </div>
        </div>
    );
}

export default ProductDescriptionCard;
