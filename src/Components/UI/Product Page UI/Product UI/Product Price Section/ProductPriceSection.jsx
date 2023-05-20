import React from 'react';
import "./ProductPriceSection.css"

function ProductPriceSection(props) {
    return (
        <div className=' ProductPriceSection-div '>
            <h1>$<span>16000</span></h1>
            <div>
                <p className='fakePrice'>$<span>33540</span></p>
                <p className='off'><span>31</span>% off</p>
            </div>
            <p className='freeDel'>Free delivery</p>
        </div>
    );
}

export default ProductPriceSection;
