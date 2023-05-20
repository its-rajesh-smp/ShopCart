import React from 'react';
import "./Product.css"
import ProductImageSection from '../../UI/Product Page UI/Product UI/Product Image Section/ProductImageSection';
import ProductDescriptionSection from '../../UI/Product Page UI/Product UI/Product Description Section/ProductDescriptionSection';
import ProductPriceSection from '../../UI/Product Page UI/Product UI/Product Price Section/ProductPriceSection';

function Product(props) {
    return (
        <div className=' Product-div '>
            <ProductImageSection showBtn={props.showBtn} />
            <ProductDescriptionSection showDetailsList={props.showDetailsList} />
            <ProductPriceSection />
        </div>
    );
}

export default Product;
