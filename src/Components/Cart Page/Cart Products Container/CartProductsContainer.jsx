import React from 'react';
import "./CartProductsContainer.css"
import Product from '../../Product Page/Product/Product';


function CartProductsContainer(props) {
    return (
        <div className=' CartProductsContainer-div '>
            <Product showBtn={true} />
            <Product showBtn={true} />
            <Product showBtn={true} />
            <Product showBtn={true} />
        </div>
    );
}

export default CartProductsContainer;
