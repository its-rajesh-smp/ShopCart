import React from 'react';
import "./YourOrderItem.css"
import OrderStatus from '../Order Status/OrderStatus';

function YourOrderItem(props) {
    return (
        <div className=' YourOrderItem-div '>
            <div className='YourOrderItem-div__imageContainer'>
                <img src="https://rukminim1.flixcart.com/image/ks7tuvk0/tripod/tripod/3/7/v/gorilla-tripod-mini-tripod-10-inch-3-inch-clip-fully-flexible-original-imag5tx7radb3hfk.jpeg" alt="" />
            </div>

            <div className='YourOrderItem-div__nameContainer'>
                <p>Oxhox Gorilla Tripod/Mini for Mobile Pho...</p>
                <p>Order Id: <span>53584344</span></p>
                <p>DELIVERED</p>
            </div>

            <div className='YourOrderItem-div__priceContainer'>
                <p>250$</p>
                <p>5</p>
            </div>

            <div className='YourOrderItem-div__statusContainer'>
                <OrderStatus />
            </div>

        </div>
    );
}

export default YourOrderItem;
