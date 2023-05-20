import React from 'react';
import "./ProductSectionContainer.css"
import { ShowOnMobile } from '../../../Style/Media';

import TopSortBar from '../Top Sort Bar/TopSortBar';
import Product from '../Product/Product';
import ToggleFilterMobile from '../../UI/Product Page UI/Filter Section UI/Toggle Filter MOBILE/ToggleFilterMobile';
import Pagination from '../../Home Page/Pagination/Pagination';
function ProductSectionContainer(props) {
    return (
        <div className=' ProductSectionContainer-div '>
            <TopSortBar />

            <ShowOnMobile>
                <ToggleFilterMobile />
            </ShowOnMobile>

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

            <Pagination />
        </div>
    );
}

export default ProductSectionContainer;
