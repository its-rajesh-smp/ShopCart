import React from 'react';
import "./ProductBigDescriptionContainer.css"

function ProductBigDescriptionContainer(props) {
    return (
        <div className=' ProductBigDescriptionContainer-div '>
            <p className='ProductBigDescriptionContainer-div__for'>{props.for}</p>
            {
                props.children
            }
        </div>
    );
}

export default ProductBigDescriptionContainer;
