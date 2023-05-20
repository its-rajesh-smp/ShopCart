import React from 'react';
import "./Productdetailspage.css"
import ProductDetailsImageSection from '../../Components/Product Details Page/Product Details Image/ProductDetailsImageSection';
import ProductDetailsDetailsSection from '../../Components/Product Details Page/Product Details Details/ProductDetailsDetailsSection';

function Productdetailspage(props) {
    return (
        <div className=' Productdetailspage-div remove__Header '>
            <ProductDetailsImageSection />
            <ProductDetailsDetailsSection />
        </div>
    );
}

export default Productdetailspage;
